import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "forStoringNews",
  initialState: {
    allArticles: [],
    selectedArticle: null,
    loading: false,
    error: null,
  },
  reducers: {
    setAllArticles: (state, action) => {
      state.allArticles = action.payload;
    },
    setSelectedArticles: (state, action) => {
      state.selectedArticle = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAllArticles, setSelectedArticles, setLoading, setError } =
  newsSlice.actions;
export default newsSlice.reducer;
