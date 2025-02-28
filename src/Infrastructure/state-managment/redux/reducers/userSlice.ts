import { UserState } from "@/Domain/states/UserState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  city: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCity: (
      state,
      action: {
        payload: string;
        type: string;
      }
    ) => {
      state.city = action.payload;
    },
  },
});

export const { setUserCity } = userSlice.actions;
export default userSlice.reducer;
