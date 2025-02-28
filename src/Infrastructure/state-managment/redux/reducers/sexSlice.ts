import { SexState } from "@/Domain/states/SexState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SexState = {
  sex: [],
  status: "idle",
  errorMessage: "",
};

const sexSlice = createSlice({
  name: "sex",
  initialState,
  reducers: {
    setPetSex: (state, action) => {
      state.status = "succeeded";
      state.sex = action.payload.value;
    },
  },
});

export const { setPetSex } = sexSlice.actions;

export default sexSlice.reducer;
