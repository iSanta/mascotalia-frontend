import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";


export const getRandomPetId = async (): Promise<CommonResponse<{ id: string, specie: string }>> => {
    return (await httpGet<CommonResponse<{ id: string, specie: string }>>({
        url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/Get-Random-Pet`
    })).data;
};
