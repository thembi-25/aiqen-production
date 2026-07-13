import type { AdapterAccountType } from "next-auth/adapters";
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  passwordHash: text("passwordHash"),
  role: text("role").notNull().default("user"),
  suspended: boolean("suspended").notNull().default(false),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  ],
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  ],
);

export const passwordResetTokens = pgTable(
  "passwordResetToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (passwordResetToken) => [
    primaryKey({
      columns: [passwordResetToken.identifier, passwordResetToken.token],
    }),
  ],
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  ],
);

export const subscriptions = pgTable("subscription", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  stripeCustomerId: text("stripeCustomerId").notNull().unique(),
  stripeSubscriptionId: text("stripeSubscriptionId"),
  stripePriceId: text("stripePriceId"),
  status: text("status").notNull().default("none"),
  currentPeriodEnd: timestamp("currentPeriodEnd", { mode: "date" }),
});

export const auditLogs = pgTable("auditLog", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  actorId: text("actorId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  action: text("action").notNull(),
  targetId: text("targetId"),
  metadata: text("metadata"),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
});

export const featureFlags = pgTable("featureFlag", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  key: text("key").notNull().unique(),
  label: text("label").notNull(),
  description: text("description"),
  enabled: boolean("enabled").notNull().default(false),
});

export const leads = pgTable("lead", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  source: text("source").notNull().default("assessment"),
  status: text("status").notNull().default("new"),
  score: integer("score"),
  notes: text("notes"),
  answers: text("answers"),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
});

export const subscribers = pgTable("subscriber", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("footer"),
  status: text("status").notNull().default("subscribed"),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
});
