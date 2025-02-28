import { httpPost } from "@/Application/http";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

export const getPet = async (
  data?: Object
): Promise<HttpResponse<PaginatedResponse<PetToAdopt[]>>> => {
  return await httpPost<PaginatedResponse<PetToAdopt[]>>(
    `${process.env.NEXT_PUBLIC_URL}v1/Pet`,
    data
  );
};
