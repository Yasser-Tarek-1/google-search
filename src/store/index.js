import { configureStore } from "@reduxjs/toolkit";
import result from "./resultSlice";
import images from "./imagesSlice";
import news from "./newsSlice";
import videos from "./videosSlice";

const store = configureStore({
  reducer: {
    images,
    result,
    news,
    videos,
  },
});

export default store;
