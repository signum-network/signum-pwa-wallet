import { RootState } from "@/states/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectThemeMode = (state: RootState): "dark" | "light" =>
  state.appState.themeMode;

export const selectIsDarkMode = createSelector(
  selectThemeMode,
  (mode) => mode === "dark"
);
