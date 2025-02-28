import { getFoundationsByCity } from "@/Infrastructure/foundation/get-foundations-by-city";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFoundations = createAsyncThunk(
  "foundations/fetchFoundations",
  async ({ city }: { city: string | number }) => {
    return await getFoundationsByCity(city);
  }
);
