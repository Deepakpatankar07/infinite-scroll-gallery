import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  hasMore: true,
  page: 1,
  query: "",
};

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setImages, setPage, setHasMore, setQuery } = searchReducer.actions;
export default searchReducer.reducer;