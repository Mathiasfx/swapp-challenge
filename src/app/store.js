import { configureStore } from "@reduxjs/toolkit";
import peopleReducers from "../feactures/people/peopleSlice";

export const store = configureStore({
  reducer: {
    peoples: peopleReducers,
  },
});

export default store;
