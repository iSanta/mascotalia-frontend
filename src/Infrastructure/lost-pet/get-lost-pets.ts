import { httpPost } from "@/Application/http";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { LostPet } from "@/Domain/lost-pet/LostPet";
import { LostPetFilters } from "@/Domain/lost-pet/LostPetFilters";

export const getLostPets = async (
    data: LostPetFilters = {}
): Promise<PaginatedResponse<LostPet[]>> => {
    return (await httpPost<PaginatedResponse<LostPet[]>>(
        `${process.env.NEXT_PUBLIC_URL}v1/LostPet/Get-Lost-Pets`,
        data
    )).data;
};