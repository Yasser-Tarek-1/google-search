import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "../service";
import axios from "axios";

export const videosResult = createAsyncThunk(
  "videos/videosResult",
  async (search, { rejectWithValue }) => {
    try {
      const option = options("videos", search);
      const response = await axios.request(option);
      return response.data.video_results;
    } catch (error) {
      console.log(error);
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  videos: [],
  error: null,
  isLoading: false,
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [videosResult.pending]: (state, action) => {
      state.error = null;
      state.isLoading = true;
    },
    [videosResult.fulfilled]: (state, action) => {
      state.videos = action.payload;
      state.isLoading = false;
    },
    [videosResult.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default videosSlice.reducer;
