import { Suspense } from "react";
import AdminLayout from "@/Presentation/layout/adminview/AdminViewLayout";
import CreatePetForm from "@/Presentation/Form/CreatePetForm";

export default async function createPet() {
  return (
    <Suspense>
      <AdminLayout selectedKey="2" breadcrumbTitle="Crear Registro de Adopción">
        <CreatePetForm />
      </AdminLayout>
    </Suspense>
  );
}
