import { httpGet } from "@/Application/http";
import { AuthUser } from "@/Domain/auth/AuthUser";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";

export const getAuthUser = async (
  token: string
): Promise<HttpResponse<CommonResponse<AuthUser>>> => {
  return await httpGet<CommonResponse<AuthUser>>({
    url: `${process.env.NEXT_PUBLIC_URL}v1/Auth`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
