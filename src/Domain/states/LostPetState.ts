import { FetchStatus } from "../common/FetchStatus";
import { PaginatedResponse } from "../login/http/PaginatedResponse";
import { LostPet } from "../lost-pet/LostPet";
import { LostPetLocation } from "../lost-pet/LostPetLocation";

export interface LostPetState extends FetchStatus {
    lostPetLocation: LostPetLocation,
    pagination: PaginatedResponse<LostPet[]>;
}