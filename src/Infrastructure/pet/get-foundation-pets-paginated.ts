import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

export const getFoundationPetsPaginated = async (
  params: {
    page: number;
    identifier?: string;
  },
  token: string
): Promise<CommonResponse<PaginatedResponse<PetToAdopt[]>>> => {
  return (
    await httpGet<CommonResponse<PaginatedResponse<PetToAdopt[]>>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/Pets-By-Foundation-Paginated`,
      options: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      objectParams: params,
    })
  ).data;
};
