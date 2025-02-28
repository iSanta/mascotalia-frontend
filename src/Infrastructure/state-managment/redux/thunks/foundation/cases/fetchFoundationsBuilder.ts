import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { FoundationState } from "@/Domain/states/FoundationState";
import { fetchFoundations } from "../fetchFoundations";

export const fetchFoundationsBuilder = (
  builder: ActionReducerMapBuilder<WritableDraft<FoundationState>>
) => {
  builder
    .addCase(fetchFoundations.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchFoundations.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.foundations = action.payload.value;
    })
    .addCase(fetchFoundations.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.error.message;
    });
};
