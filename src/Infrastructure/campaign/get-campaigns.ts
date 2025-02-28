import { httpGet } from "@/Application/http";
import { Campaign } from "@/Domain/campaign/Campaign";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";

export const getCampaigns = async (page: string = "1"): Promise<PaginatedResponse<Campaign[]>> => {
  return (
    await httpGet<PaginatedResponse<Campaign[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Campaign?Page=${page}`,
    })
  ).data;
};
