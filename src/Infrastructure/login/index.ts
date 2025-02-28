import { httpPost } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";


export const loginCall = async (
  email: string,
  password: string
): Promise<HttpResponse<CommonResponse<string>>> => {
  return (
    await httpPost<CommonResponse<string>>(`${process.env.NEXT_PUBLIC_URL}v1/Auth`, {
      email,
      password,
    })
  );
};
