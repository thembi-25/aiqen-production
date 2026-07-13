import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) return null;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .limit(1);

        if (!user?.passwordHash) return null;
        if (user.suspended) return null;

        const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordsMatch) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider !== "credentials" && user.id) {
        const [existing] = await db
          .select({ emailVerified: users.emailVerified, suspended: users.suspended })
          .from(users)
          .where(eq(users.id, user.id))
          .limit(1);

        if (existing?.suspended) return false;

        if (existing && !existing.emailVerified) {
          await db.update(users).set({ emailVerified: new Date() }).where(eq(users.id, user.id));
        }
      }
      return true;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "user";
      }

      if (trigger === "update" && session?.impersonateUserId && token.role === "admin" && !token.impersonatorId) {
        const [target] = await db
          .select()
          .from(users)
          .where(eq(users.id, session.impersonateUserId))
          .limit(1);

        if (target) {
          token.impersonatorId = token.id;
          token.impersonatorName = token.name ?? undefined;
          token.id = target.id;
          token.role = target.role;
          token.name = target.name;
          token.email = target.email;
          token.picture = target.image;
        }
      }

      if (trigger === "update" && session?.stopImpersonating && token.impersonatorId) {
        const [original] = await db
          .select()
          .from(users)
          .where(eq(users.id, token.impersonatorId))
          .limit(1);

        if (original) {
          token.id = original.id;
          token.role = original.role;
          token.name = original.name;
          token.email = original.email;
          token.picture = original.image;
        }
        token.impersonatorId = undefined;
        token.impersonatorName = undefined;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.impersonatorId = token.impersonatorId;
        session.user.impersonatorName = token.impersonatorName;
      }
      return session;
    },
  },
});
