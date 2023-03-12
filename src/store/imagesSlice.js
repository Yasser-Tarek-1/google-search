import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "../service";
import axios from "axios";

export const imagesResult = createAsyncThunk(
  "images/imagesResult",
  async (search, { rejectWithValue }) => {
    try {
      const option = options("images", search);
      const response = await axios.request(option);
      return response.data.image_results;
    } catch (error) {
      console.log(error);
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  images: [],
  error: null,
  isLoading: false,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [imagesResult.pending]: (state, action) => {
      state.error = null;
      state.isLoading = true;
    },
    [imagesResult.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    },
    [imagesResult.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default imagesSlice.reducer;
