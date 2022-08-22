import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { isClientSide } from "@/app/isClientSide";
import { appSlice } from "@/app/states/appState";
import { storage } from "./storage";

function persist<T = any>(config: any, reducer: Reducer) {
  return isClientSide()
    ? persistReducer<T, AnyAction>(config, reducer)
    : reducer;
}

const appPersistConfig = {
  key: "app",
  version: 1,
  storage,
  // persist only the mentioned fields.
  whitelist: ["themeMode"],
};

const rootReducer = combineReducers({
  appState: persist<ReturnType<typeof appSlice.reducer>>(
    appPersistConfig,
    appSlice.reducer
  ),
  // add more states here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
