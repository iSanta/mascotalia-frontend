import { CampaignState } from "@/Domain/states/CampaignState";
import useDispatch from "../../useDispatch";
import useSelect from "../../useSelect";
import { fetchCampaigns } from "../../redux/thunks/campaign/fetchCampaigns";
import { CampaignFilters } from "@/Domain/campaign/CampaignFilters";

const useGetCampaigns = () => {

    const { dispatchAction } = useDispatch();
    const [campaignState] = useSelect<CampaignState>((state) => state.campaign);

    const get = (params: CampaignFilters): void => {
        dispatchAction(fetchCampaigns, { params });
    };

    const getStoreCampaigns = (): CampaignState => {
        return campaignState();
    };

    return { get, getStoreCampaigns }
}

export default useGetCampaigns