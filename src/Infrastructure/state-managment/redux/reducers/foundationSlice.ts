import { FoundationState } from "@/Domain/states/FoundationState";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFoundationsBuilder } from "../thunks/foundation/cases/fetchFoundationsBuilder";

const initialState: FoundationState = {
  status: "loading",
  errorMessage: "",
  foundations: [],
};

const foundationSlice = createSlice({
  name: "foundation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchFoundationsBuilder(builder);
  },
});

export const {} = foundationSlice.actions;
export default foundationSlice.reducer;
