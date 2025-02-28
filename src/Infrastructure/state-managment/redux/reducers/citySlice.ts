import { City } from "@/Domain/city/City";
import { CityState } from "@/Domain/states/CityState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CityState = {
  cities: [],
  status: "loading",
  errorMessage: "",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCities: (
      state,
      action: {
        payload: City[];
        type: string;
      }
    ) => {
      state.cities = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { setCities } = citySlice.actions;
export default citySlice.reducer;
