import { PetFilters } from "@/Domain/pet/PetFilters";
import { getPet } from "@/Infrastructure/pet/get-pets";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async ({ params, filtered }: { params: PetFilters; filtered: boolean }) => {
    const response = await getPet(params);
    return {
      response: response.data,
      filtered,
    };
  }
);
