import { getCurrentUser } from "@/lib/auth/dal";
import { Sidebar } from "@/components/workforce/sidebar";
import { Topbar } from "@/components/workforce/topbar";
import { Container } from "@/components/shared/container";

export default async function WorkforceLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <>
      <Topbar userName={user.name ?? user.email} />

      <div className="flex">
        <Sidebar />

        <main id="main-content" className="min-w-0 flex-1">
          <Container>
            <div className="py-10">{children}</div>
          </Container>
        </main>
      </div>
    </>
  );
}
