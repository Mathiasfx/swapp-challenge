import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../../services/swpeople.api";

export const peopleSlice = createSlice({
  name: "peoples",
  initialState: {
    people: [],
    status: null,    
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      state.status = "loading";
    },
    [getAll.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.people = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.status = "failed";
    },
  },

  reducers: {
    deletePerson: (state, action) => {
      let data = state.people.filter((item, i) => i !== action.payload);
      state.people = data;

    }
  },
});


export const { deletePerson } = peopleSlice.actions;
export default peopleSlice.reducer;
