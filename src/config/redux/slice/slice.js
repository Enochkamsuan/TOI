import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "forStoringNews",
  initialState: {
    news: [],
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
