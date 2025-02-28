import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../slice/slice";

const store = configureStore({
  reducer: {
    newsStore: newsReducer,
  },
});

export default store;
