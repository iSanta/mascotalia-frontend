import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { Sex } from "@/Domain/pet/sex/Sex";

const getSex = async (): Promise<CommonResponse<Array<Sex>>> => {
  return (await httpGet<CommonResponse<Array<Sex>>>({ url: `${process.env.NEXT_PUBLIC_URL}v1/Sex` })).data;
};

export { getSex };
