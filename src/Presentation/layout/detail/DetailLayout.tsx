import React from "react";
import DetailSection from "./DetailSection";
import SearchMoreSection from "./SearchMoreSection";
import { Pet } from "@/Domain/pet/detail/Pet";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import FavoritePanel from "@/Presentation/components/common/Favorites/FavoritePanel";

const DetailLayout = ({
  petDetail,
  recommendedPets,
  recommendedOldPets,
}: {
  petDetail: Pet;
  recommendedPets: PetToAdopt[];
  recommendedOldPets: PetToAdopt[];
}) => {
  return (
    <>
      <main>
        <DetailSection petDetail={petDetail} />
        {/* <RecomendationSection recomendations={{
                name: petDetail.ownerName,
                recomendations: petDetail.recomendations,
                specie: petDetail.specie
            }}  /> */}
        <SearchMoreSection pets={recommendedPets} oldPets={recommendedOldPets} />
      </main>
      <FavoritePanel />
    </>
  );
};

export default DetailLayout;
