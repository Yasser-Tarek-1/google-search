import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "../service";
import axios from "axios";

export const resultApi = createAsyncThunk(
  "results/resultApi",
  async ({ value, type }, { rejectWithValue, getState }) => {
    // const { value } = getState().input;
    try {
      const option = options(value, type);
      const response = await axios.request(option);
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  results: {},
  error: null,
  isLoading: false,
};

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: {
    [resultApi.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [resultApi.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.isLoading = false;
    },
    [resultApi.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default resultSlice.reducer;
