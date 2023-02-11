import { createSlice } from "@reduxjs/toolkit";

const initialState =
  [
    {
      id: 1,
      name: "Luke Skywalker",
      gender: "male",
      height: 172,
      eye_color: "blue",
      skin_color: "fair",
    },
    {
      id: 2,
      name: "C-3PO",
      gender: "n/a",
      height: 167,
      eye_color: "yellow",
      skin_color: "gold",
    },
    {
      id: 3,
      name: "R2-D2",
      gender: "n/a",
      height: 96,
      eye_color: "red",
      skin_color: "white,blue",
    }
  ];

export const peopleSlice = createSlice({
  name: "peoples",
  initialState,
  reducers: {},
});

export default peopleSlice.reducer;
