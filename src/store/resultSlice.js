import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "../service";
import axios from "axios";

export const resultResult = createAsyncThunk(
  "result/resultResult",
  async (search, { rejectWithValue }) => {
    try {
      const option = options("organicResults", search);
      const response = await axios.request(option);
      return response.data.organic_results;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  result: [],
  error: null,
  isLoading: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: {
    [resultResult.pending]: (state, action) => {
      state.error = null;
      state.isLoading = true;
    },
    [resultResult.fulfilled]: (state, action) => {
      state.result = action.payload;
      state.isLoading = false;
    },
    [resultResult.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default resultSlice.reducer;
