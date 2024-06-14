import { EventInput } from "@fullcalendar/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialDataEvents } from "./initialDataEvents";
import { get } from "lodash";

export interface CustomEventType extends EventInput {
  fromTime: string;
  toTime: string;
  isPayment?: boolean;
}

export type EventsStateType = {
  status: "initial" | "pending" | "success" | "error";
  data: Array<CustomEventType>;
};

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    status: "success",
    data: initialDataEvents,
  },
  reducers: {
    addEvent: (state, action: PayloadAction<CustomEventType>) => {
      // state.data = [...get(state, "data", []), action.payload];
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      // Delete event
    },
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;

export const selectEvents = (state: any) =>
  get(state, "events", { status: "initial", data: [] });
