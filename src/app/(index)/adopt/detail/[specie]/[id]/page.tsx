import DetailLayout from "@/Presentation/layout/detail/DetailLayout";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Pet } from "@/Domain/pet/detail/Pet";
import { getPetDetail } from "@/Infrastructure/pet/detail/get-pet-detail";
import { Suspense } from "react";
import { getRandomRecommendedPets } from "@/Infrastructure/pet/get-random-recommended-pets";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

const petDetail = async (
  id: string
): Promise<[CommonResponse<Pet>, CommonResponse<PetToAdopt[]>, CommonResponse<PetToAdopt[]>]> => {
  return Promise.all([
    getPetDetail(id),
    getRandomRecommendedPets({ quantity: 4 }),
    getRandomRecommendedPets({ quantity: 4, minimumAge: 7 }),
  ]);
};

export default async function pet(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const [petDetailData, recommendedPets, recommendedOldPets] = await petDetail(params.id);

  return (
    <Suspense>
      <DetailLayout
        petDetail={petDetailData.value}
        recommendedPets={recommendedPets?.value || []}
        recommendedOldPets={recommendedOldPets?.value || []}
      />
    </Suspense>
  );
}
