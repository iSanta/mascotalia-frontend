import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

export const getFoundationPets = async (
  foundationId: string,
  params: {
    quantity?: number;
    isRandom?: boolean;
  }
): Promise<CommonResponse<PetToAdopt[]>> => {
  return (
    await httpGet<CommonResponse<PetToAdopt[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/Pets-By-Foundation/${foundationId}`,
      objectParams: params,
    })
  ).data;
};
