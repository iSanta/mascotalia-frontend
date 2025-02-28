import { Campaign } from "../campaign/Campaign";
import { FetchStatus } from "../common/FetchStatus";
import { PaginatedResponse } from "../login/http/PaginatedResponse";

export interface CampaignState extends FetchStatus {
  pagination: PaginatedResponse<Campaign[]>;
}