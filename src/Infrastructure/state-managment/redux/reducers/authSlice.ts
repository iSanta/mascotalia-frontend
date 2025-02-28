import { AuthState } from "@/Domain/states/AuthState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: {
        payload: string;
        type: string;
      }
    ) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
