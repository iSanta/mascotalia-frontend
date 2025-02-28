import { LostPetFilters } from "@/Domain/lost-pet/LostPetFilters";
import { getLostPets } from "@/Infrastructure/lost-pet/get-lost-pets";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLostPets = createAsyncThunk(
  "lostPets/fetchLostPets",
  async ({ params }: { params: LostPetFilters }) => {
    const response = await getLostPets(params);
    return {
      response,
    };
  }
);
