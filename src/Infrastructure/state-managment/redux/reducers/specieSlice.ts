import { SpecieState } from "@/Domain/states/SpecieState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SpecieState = {
  species: [],
  status: "idle",
  errorMessage: "",
};

const specieSlice = createSlice({
  name: "specie",
  initialState,
  reducers: {
    setSpecies: (state, action) => {
      state.status = "succeeded";
      state.species = action.payload.value;
    },
  },
});

export const { setSpecies } = specieSlice.actions;

export default specieSlice.reducer;
