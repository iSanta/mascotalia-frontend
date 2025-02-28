import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Foundation } from "@/Domain/foundation/Foundation";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import { getFoundationDetail } from "@/Infrastructure/foundation/get-foundation-detail";
import { getFoundationPets } from "@/Infrastructure/pet/get-foundation-pets";
import FoundationLayout from "@/Presentation/layout/foundation/FoundationLayout";
import { Suspense } from "react";

const getFoundationDetailData = async (
  id: string
): Promise<[CommonResponse<Foundation>, CommonResponse<PetToAdopt[]>]> => {
  return Promise.all([
    getFoundationDetail(id),
    getFoundationPets(id, { quantity: 4, isRandom: true }),
  ]);
};

export default async function foundationDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const { id } = params;

  const [foundationDetail, foundationPets] = await getFoundationDetailData(id);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <FoundationLayout
        foundationDetail={foundationDetail.value}
        foundationPets={foundationPets?.value}
      />
    </Suspense>
  );
}
