import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import { PetState } from "@/Domain/states/PetState";
import { createSlice } from "@reduxjs/toolkit";
import { fetchPets } from "../thunks/pet/fetchPets";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";

const initialState: PetState = {
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

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPetsToAdopt: (
      state,
      action: {
        payload: PaginatedResponse<PetToAdopt[]>;
        type: string;
      }
    ) => {
      state.pagination.success = action.payload.success;
      state.pagination.message = action.payload.message;
      state.pagination.value.items = action.payload.value.items;
      state.pagination.value.totalCount = action.payload.value.totalCount;
      state.pagination.value.pageSize = action.payload.value.pageSize;
      state.pagination.value.pageNumber = action.payload.value.pageNumber;
      state.pagination.value.totalPages = action.payload.value.totalPages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.filtered) {
          state.pagination.value.items = action.payload.response.value.items;
        } else {
          state.pagination.value.items.push(...action.payload.response.value.items);
        }

        state.pagination.value.totalCount = action.payload.response.value.totalCount;
        state.pagination.value.pageSize = action.payload.response.value.pageSize;
        state.pagination.value.pageNumber = action.payload.response.value.pageNumber;
        state.pagination.value.totalPages = action.payload.response.value.totalPages;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const { setPetsToAdopt } = petSlice.actions;
export default petSlice.reducer;