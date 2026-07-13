import { getCurrentUser } from "@/lib/auth/dal";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { Container } from "@/components/shared/container";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
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
