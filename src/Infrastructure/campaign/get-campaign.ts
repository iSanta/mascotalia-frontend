import { httpGet } from "@/Application/http";
import { Campaign } from "@/Domain/campaign/Campaign";
import { CommonResponse } from "@/Domain/common/CommonResponse";

export const getCampaign = async (campaignId: string): Promise<CommonResponse<Campaign>> => {
  return (
    await httpGet<CommonResponse<Campaign>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Campaign/${campaignId}`,
    })
  ).data;
};
