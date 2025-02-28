import { httpPost } from "@/Application/http";
import { AuthUser } from "@/Domain/auth/AuthUser";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";

export const rememberPassword = async (
    email: string
): Promise<CommonResponse<AuthUser>> => {
    return (await httpPost<CommonResponse<AuthUser>>(
        `${process.env.NEXT_PUBLIC_URL}v1/Auth/Remember-Password`,
        {
            email
        })).data;
};