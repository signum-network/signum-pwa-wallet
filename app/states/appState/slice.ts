import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSystemTheme } from "@/app/getSystemTheme";

export interface AppState {
  themeMode: "light" | "dark";
}

const initialState: AppState = {
  themeMode: getSystemTheme(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.themeMode = action.payload;
    },
  },
});

export const { actions } = appSlice;
