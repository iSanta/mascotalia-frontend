import { httpGet } from "@/Application/http";
import { AboutFoundations } from "@/Domain/about/AboutFoundations";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";

export const getRandomFoundations = async (
  city: string
): Promise<CommonResponse<AboutFoundations[]>> => {
  return (await httpGet<CommonResponse<AboutFoundations[]>>({
    url: `${process.env.NEXT_PUBLIC_URL}v1/Owner/${city}`,
  })).data;
};
