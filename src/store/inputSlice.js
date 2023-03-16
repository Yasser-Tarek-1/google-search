import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const inputSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const { updateSearchTerm } = inputSlice.actions;
