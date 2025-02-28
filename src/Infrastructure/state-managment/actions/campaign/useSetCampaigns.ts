import React from 'react'
import useDispatch from '../../useDispatch';
import { CommonResponse } from '@/Domain/common/CommonResponse';
import { PaginatedResponse } from '@/Domain/login/http/PaginatedResponse';
import { Campaign } from '@/Domain/campaign/Campaign';
import { setCampaigns } from '../../redux/reducers/campaignSlice';

const useSetCampaigns = () => {
    const { dispatchAction } = useDispatch();

    const setStoreCampaigns = (campaigns: PaginatedResponse<Campaign[]>) => {
        dispatchAction<PaginatedResponse<Campaign[]>>(setCampaigns, campaigns);
    };

    return { setStoreCampaigns }
}

export default useSetCampaigns