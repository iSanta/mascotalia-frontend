import DashboardLayout from "@/Presentation/layout/admin/dashboard/DashboardLayout";
import AdminLayout from "@/Presentation/layout/adminview/AdminViewLayout";
import { Suspense } from "react";

export default async function dashboard() {

  return (
    <Suspense>
      <AdminLayout selectedKey="1" breadcrumbTitle="Dashboard">
        <DashboardLayout />
      </AdminLayout>
    </Suspense>

  );
}
