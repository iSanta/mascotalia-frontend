import { Campaign } from "@/Domain/campaign/Campaign";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { CampaignState } from "@/Domain/states/CampaignState";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampaigns } from "../thunks/campaign/fetchCampaigns";

const initialState: CampaignState = {
    status: "idle",
    errorMessage: "",
    pagination: {
        success: false,
        message: "",
        value: {
            items: [],
            totalCount: 0,
            pageSize: 0,
            pageNumber: 0,
            totalPages: 0,
        },
    },
};

const campaignSlice = createSlice({
    name: "campaign",
    initialState,
    reducers: {
        setCampaigns: (state,
            action: {
                payload: PaginatedResponse<Campaign[]>;
                type: string;
            }) => {
            state.pagination = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampaigns.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pagination.value = action.payload.response;

            })
            .addCase(fetchCampaigns.rejected, (state, action) => {
                state.status = "failed";
                state.errorMessage = action.error.message;
            });
    }
});

export const { setCampaigns } = campaignSlice.actions;
export default campaignSlice.reducer;