import { httpPost } from "@/Application/http";
import { AuthUser } from "@/Domain/auth/AuthUser";
import { CommonResponse } from "@/Domain/common/CommonResponse";

export const changePassword = async (
    token: string,
    password: string
): Promise<CommonResponse<AuthUser>> => {
    return (await httpPost<CommonResponse<AuthUser>>(
        `${process.env.NEXT_PUBLIC_URL}v1/Auth/Change-Password`,
        {
            token,
            password
        })).data;
};