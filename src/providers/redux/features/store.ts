import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

// RootState va AppDispatch yaratish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
