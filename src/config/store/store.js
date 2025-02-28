import { configureStore } from "@reduxjs/toolkit";
import { storingNewsReducer } from "../slice/slice";

const store = configureStore({
  reducer: {
    newsStore: storingNewsReducer(),
  },
});

export default store;
