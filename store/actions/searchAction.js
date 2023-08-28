import axios from "axios";
import {
  setSearchImages,
  setHasMore,
  setPage,
} from "../reducers/searchReducers";

export const asyncSetImages = (a) => async (dispatch, getState) => {
  try {
    const query = a;
    const { page } = getState().searchReducer;
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=j6272V856y6JbxGmjWtsF0ZAUUQhHEGqtQ7LuZcP2zA&page=${page}&query=${query}&per_page=12`
    );

    page >= 5 || data.results.length === 0 ? dispatch(setHasMore(false)) : dispatch(setHasMore(true));

    dispatch(setSearchImages({ query, images: data.results }));
    dispatch(setPage(page + 1));
  } catch (error) {
    console.log(error);
  }
};
