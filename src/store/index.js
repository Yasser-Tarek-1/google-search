import { configureStore } from "@reduxjs/toolkit";
import results from "./resultSlice";
import input from "./inputSlice";

const store = configureStore({
  reducer: {
    results,
    input,
  },
});

export default store;
