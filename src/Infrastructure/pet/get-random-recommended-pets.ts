import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

export const getRandomRecommendedPets = async (params: {
  quantity?: number;
  minimumAge?: number;
}): Promise<CommonResponse<PetToAdopt[]>> => {
  return (
    await httpGet<CommonResponse<PetToAdopt[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/Random-Pets`,
      objectParams: params,
    })
  ).data;
};
