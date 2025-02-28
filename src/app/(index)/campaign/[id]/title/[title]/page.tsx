import { Campaign } from "@/Domain/campaign/Campaign";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { getCampaign } from "@/Infrastructure/campaign/get-campaign";
import { getRandomCampaigns } from "@/Infrastructure/campaign/get-random-campaigns";
import { getRecentCampaigns } from "@/Infrastructure/campaign/get-recent-campaigns";
import CampaignDetailLayout from "@/Presentation/layout/campaign/CampaignDetailLayout/CampaignDetailLayout";
import { Suspense } from "react";

const get = async (id: string): Promise<[CommonResponse<Campaign>,CommonResponse<Campaign[]>, CommonResponse<Campaign[]>]> => {
  return Promise.all([
    getCampaign(id),
    getRecentCampaigns(),
    getRandomCampaigns()
  ]);
};

export default async function campaignDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const[campaign,recentCampaigns,randomCampaigns] = await get(params.id);
  return (
    <Suspense>
      <CampaignDetailLayout campaign={campaign.value} recentCampaigns={recentCampaigns.value} randomCampaigns={randomCampaigns.value} />
    </Suspense>
  );
}
