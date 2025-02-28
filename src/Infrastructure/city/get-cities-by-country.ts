import { httpGet } from "@/Application/http";
import { City } from "@/Domain/city/City";
import { CommonResponse } from "@/Domain/common/CommonResponse";

export const getCitiesByCountry = async (
  countryId: number = 1
): Promise<CommonResponse<City[]>> => {
  return (
    await httpGet<CommonResponse<City[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/City/Cities-By-Country/${countryId}`,
    })
  ).data;
};
