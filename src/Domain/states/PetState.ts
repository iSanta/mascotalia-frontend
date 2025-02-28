import { FetchStatus } from "../common/FetchStatus";
import { PaginatedResponse } from "../login/http/PaginatedResponse";
import { PetToAdopt } from "../pet/PetToAdopt";

export interface PetState extends FetchStatus {
  pagination: PaginatedResponse<PetToAdopt[]>;
}
