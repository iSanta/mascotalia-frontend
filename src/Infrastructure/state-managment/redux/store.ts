import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import petSlice from "./reducers/petSlice";
import sexSlice from "./reducers/sexSlice";
import specieSlice from "./reducers/specieSlice";
import lostPetSlice from "./reducers/lostPetSlice";
import filtersSlice from "./reducers/filtersSlice";
import blogSlice from "./reducers/blogSlice";
import citySlice from "./reducers/citySlice";
import userSlice from "./reducers/userSlice";
import foundationSlice from "./reducers/foundationSlice";
import campaignSlice from "./reducers/campaignSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      pet: petSlice,
      sex: sexSlice,
      specie: specieSlice,
      lostPet: lostPetSlice,
      filters: filtersSlice,
      blog: blogSlice,
      city: citySlice,
      user: userSlice,
      foundation: foundationSlice,
      campaign: campaignSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
