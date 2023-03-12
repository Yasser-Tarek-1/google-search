import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "../service";
import axios from "axios";

export const newsResult = createAsyncThunk(
  "news/newsResult",
  async (search, { rejectWithValue }) => {
    try {
      const option = options("news", search);
      const response = await axios.request(option);
      return response.data.news_results;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  news: [],
  error: null,
  isLoading: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [newsResult.pending]: (state, action) => {
      state.error = null;
      state.isLoading = true;
    },
    [newsResult.fulfilled]: (state, action) => {
      state.news = action.payload;
      state.isLoading = false;
    },
    [newsResult.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default newsSlice.reducer;
