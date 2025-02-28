import { CampaignFilters } from "@/Domain/campaign/CampaignFilters";
import { getCampaigns } from "@/Infrastructure/campaign/get-campaigns";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampaigns = createAsyncThunk(
    "campaigns/fetchCampaigns",
    async ({ params }: { params: CampaignFilters }) => {
        const response = await getCampaigns(params.page);
        return {
            response: response.value,
        };
    }
);