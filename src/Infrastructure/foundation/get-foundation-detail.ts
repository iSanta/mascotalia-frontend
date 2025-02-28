import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Foundation } from "@/Domain/foundation/Foundation";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";

const getFoundationDetail = async (id: string): Promise<CommonResponse<Foundation>> => {
  return (await httpGet<CommonResponse<Foundation>>({
    url: `${process.env.NEXT_PUBLIC_URL}v1/Foundation/${id}`,
  })).data;
};

export { getFoundationDetail };
