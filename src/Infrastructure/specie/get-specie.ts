import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Specie } from "@/Domain/pet/specie/Specie";

export const getSpecie = async (): Promise<CommonResponse<Specie[]>> => {
  return (
    await httpGet<CommonResponse<Array<Specie>>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Specie`,
    })
  ).data;
};
