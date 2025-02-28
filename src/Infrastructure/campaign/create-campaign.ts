import { httpPost } from "@/Application/http";

export const createCampaign = async (campaign: FormData, token: string) => {
    return await httpPost(`${process.env.NEXT_PUBLIC_URL}v1/Campaign`,
        campaign,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
};
