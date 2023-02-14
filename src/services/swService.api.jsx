import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;

export const getAll = createAsyncThunk("people/getAll", async () => {
  try {
    const res = await axios.get(url);
    return res.data.results;
  } catch (err) {
    alert(err.message);
    console.error(err);
    throw Error(err);
  }
});
