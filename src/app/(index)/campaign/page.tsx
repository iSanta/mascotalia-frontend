import { Campaign } from "@/Domain/campaign/Campaign";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { getCampaigns } from "@/Infrastructure/campaign/get-campaigns";
import { getRandomCampaigns } from "@/Infrastructure/campaign/get-random-campaigns";
import { getRecentCampaigns } from "@/Infrastructure/campaign/get-recent-campaigns";
import CampaignLayout from "@/Presentation/layout/campaign/CampaignLayout/CampaignLayout";
import { Suspense } from "react";

const get = async (
  page: string
): Promise<
  [PaginatedResponse<Campaign[]>, CommonResponse<Campaign[]>, CommonResponse<Campaign[]>]
> => {
  return Promise.all([getCampaigns(page), getRecentCampaigns(), getRandomCampaigns()]);
};

export default async function campaign(props: { searchParams: Promise<{ Page: string }> }) {
  const searchParams = await props.searchParams;
  const [campaigns, recentCampaigns, randomCampaigns] = await get(searchParams.Page || "1");
  return (
    <Suspense>
      <CampaignLayout
        campaigns={campaigns}
        recentCampaigns={recentCampaigns.value}
        randomCampaigns={randomCampaigns.value}
      />
    </Suspense>
  );
}
