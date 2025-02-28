import React from "react";
import FoundationDetail from "./FoundationDetail";
import { Foundation } from "@/Domain/foundation/Foundation";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

const FoundationLayout = ({
  foundationDetail,
  foundationPets,
}: {
  foundationDetail: Foundation;
  foundationPets: PetToAdopt[];
}) => {
  return (
    <main>
      <FoundationDetail foundationDetail={foundationDetail} foundationPets={foundationPets} />
    </main>
  );
};

export default FoundationLayout;
