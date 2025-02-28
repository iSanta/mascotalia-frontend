import { Campaign } from "@/Domain/campaign/Campaign";
import { CampaignFilters } from "@/Domain/campaign/CampaignFilters";
import { CreateCampaign } from "@/Domain/campaign/CreateCampaign";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { CampaignState } from "@/Domain/states/CampaignState";
import useGetCampaigns from "@/Infrastructure/state-managment/actions/campaign/useGetCampaigns";
import useSetCampaigns from "@/Infrastructure/state-managment/actions/campaign/useSetCampaigns";
import { withAuthTokenAsync } from "../auth/withAuthToken";
import { createCampaign } from "@/Infrastructure/campaign/create-campaign";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import { validateFormDataEmpty } from "../utils/validateFormDataEmpty";
import { useState } from "react";

const useCampaign = () => {
    const { get, getStoreCampaigns } = useGetCampaigns();
    const { setStoreCampaigns } = useSetCampaigns();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const callCampaigns = (filters: CampaignFilters) => {
        get(filters);
    }

    const getCampaigns = (): CampaignState => {
        return getStoreCampaigns();
    }

    const setCampaigns = (campaigns: PaginatedResponse<Campaign[]>) => {
        setStoreCampaigns(campaigns);
    }

    const create = async (campaign: CreateCampaign): Promise<NotificationResponse> => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("createCampaignDTO.title", campaign.title);
        formData.append("createCampaignDTO.description", campaign.description);
        formData.append("createCampaignDTO.startDate", campaign.startDate.toString());
        formData.append("createCampaignDTO.endDate", campaign.endDate.toString());
        formData.append("createCampaignDTO.location", campaign.location);
        formData.append("createCampaignDTO.locationAddress", campaign.locationAddress);
        formData.append("createCampaignDTO.file", campaign.file.fileList[0].originFileObj);
        formData.append("createCampaignDTO.maxVolunteers", campaign.maxVolunteers.toString());

        if (validateFormDataEmpty(formData)) {
            return {
                message: "Formulario vacío",
                status: "error",
            };
        };

        const createCampaignWithAuth = withAuthTokenAsync<typeof createCampaign>(createCampaign);
        const response = await createCampaignWithAuth(formData);
        setIsLoading(false);
        return {
            message: response.success ? "Campaña creada" : response.message,
            status: response.success ? "success" : "error",
        };
    }

    return { callCampaigns, getCampaigns, setCampaigns, createCampaign, create, isLoading };
}

export default useCampaign