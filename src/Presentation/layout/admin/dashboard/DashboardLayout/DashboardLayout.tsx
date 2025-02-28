"use client";
import useAuth from "@/Application/auth/useAuth";
import usePet from "@/Application/pet/usePet";
import InputSearch from "@/Presentation/components/common/InputSearch";
import PetsTable from "@/Presentation/components/Dashboard/PetsTable";
import { Row } from "@/Presentation/design-system";
import { useEffect, useMemo } from "react";

const DashboardLayout = () => {
  useAuth({ authorizedRoles: ["Admin", "Foundation"] });
  const { foundationPetsPaginated, getPets } = usePet();

  const pets = useMemo(() => getPets().pagination, [getPets().pagination]);

  useEffect(() => {
    (async () => {
      await foundationPetsPaginated();
    })();
  }, []);

  return (
    <>
      <Row gutter={16}>
        <InputSearch
          onSubmit={async (value: string) => {
            await foundationPetsPaginated(null, value);
          }}
          onEmpty={async () => {
            await foundationPetsPaginated();
          }}
        />
      </Row>
      <PetsTable pets={pets} />
    </>
  );
};

export default DashboardLayout;
