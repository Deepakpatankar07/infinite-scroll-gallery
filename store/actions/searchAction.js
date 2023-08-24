import axios from "axios";
import { setImages, setHasMore, setPage } from "../reducers/searchReducers";

export const asyncSetImages = () => async (dispatch, getState) => {
  try {
    const { query, page } = getState().searchReducer;
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=j6272V856y6JbxGmjWtsF0ZAUUQhHEGqtQ7LuZcP2zA&page=${page}&query=${query}&per_page=12`
    );
    console.log("Debug - Page:", page);
    console.log("Debug - Results Length:", data.results.length);
    if (page >= 5 || data.results.length === 0) {
      console.log("Debug - Dispatching setHasMore(false)");
      dispatch(setHasMore(false));
    }

    dispatch(setImages(data.results));
    dispatch(setPage(page + 1));
  } catch (error) {
    console.log(error);
  }
};
