import { requireAdmin } from "@/lib/admin/dal";
import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";
import { Container } from "@/components/shared/container";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <>
      <Topbar userName={admin.name ?? admin.email} />

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
