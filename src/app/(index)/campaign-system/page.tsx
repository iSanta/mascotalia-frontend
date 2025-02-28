import { Campaign } from "@/Domain/campaign/Campaign";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { getRecentCampaigns } from "@/Infrastructure/campaign/get-recent-campaigns";
import CampaignSystemLayout from "@/Presentation/layout/campaign/CampaignSystemLayout/CampaignSystemLayout";
import { Suspense } from "react";

const recentCampaigns = async (): Promise<CommonResponse<Campaign[]>> => {
  return await getRecentCampaigns();
};

export default async function campaignSystem() {
  return (
    <Suspense>
      <CampaignSystemLayout recentCampaigns={(await recentCampaigns()).value} />
    </Suspense>
  );
}
