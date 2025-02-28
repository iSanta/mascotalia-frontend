import { Suspense } from "react";
import AdminLayout from "@/Presentation/layout/adminview/AdminViewLayout";
import CreateCampaignLayout from "@/Presentation/layout/admin/dashboard/campaign/CreateCampaignLayout";


export default async function createCampaign() {
    return (
        <Suspense>
            <AdminLayout selectedKey="4" breadcrumbTitle="Crear Campaña de Voluntariado">
                <CreateCampaignLayout />
            </AdminLayout>
        </Suspense>
    );
}