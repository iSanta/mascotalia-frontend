import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { LostPet } from "@/Domain/lost-pet/LostPet";
import { LostPetLocation } from "@/Domain/lost-pet/LostPetLocation";
import { LostPetState } from "@/Domain/states/LostPetState";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLostPets } from "../thunks/lost-pet/fetchLostPets";

const initialState: LostPetState = {
  lostPetLocation: {
    latitude: 0,
    longitude: 0,
  },
  pagination: {
    success: false,
    message: "",
    value: {
      items: [],
      totalCount: 0,
      pageSize: 0,
      pageNumber: 0,
      totalPages: 0
    }
  },
  status: "idle",
  errorMessage: ""
};

const lostPetSlice = createSlice({
  name: "lostPet",
  initialState,
  reducers: {
    setLostPetLocation: (
      state,
      action: {
        payload: LostPetLocation;
        type: string;
      }
    ) => {

      state.lostPetLocation.latitude = action.payload.latitude;
      state.lostPetLocation.longitude = action.payload.longitude;
    },
    setLostPets: (
      state,
      action: {
        payload: PaginatedResponse<LostPet[]>;
        type: string;
      }) => {
      state.pagination = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLostPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLostPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pagination = action.payload.response;
      })
      .addCase(fetchLostPets.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const { setLostPetLocation, setLostPets } = lostPetSlice.actions;
export default lostPetSlice.reducer;
