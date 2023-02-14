import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../../services/swService.api";

export const peopleSlice = createSlice({
  name: "peoples",
  initialState: {
    people: [],
    filter: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.people = action.payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      state.status = "failed";
    });
  },

  reducers: {
    /**Eliminar */
    deletePerson: (state, action) => {
      let data = state.people.filter((item, i) => i !== action.payload);
      /**Actualiza */
      state.people = data;
      state.filter = data;
    },
    /**Agregar */
    addPerson: (state, action) => {
      state.people.push(action.payload);
    },
    /**Filtrar */
    filterPeople: (state, action) => {
      state.filter = state.people.filter((item) => {
        state.status = "searching";
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      if (state.filter.length === 0) {
        state.status = "succeeded";
      }
    },
  },
});
/**Exports */
export const { deletePerson, addPerson, filterPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
