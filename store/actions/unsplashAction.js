import axios from "axios";
import { setImages,setPage,setHasMore} from "../reducers/unsplashReducers";

export const asyncSetImages = () => async (dispatch, getState) => {
    try {
        const { page } = getState().unsplashReducer;
        const { data } = await axios(
            `https://api.unsplash.com/photos?client_id=j6272V856y6JbxGmjWtsF0ZAUUQhHEGqtQ7LuZcP2zA&page=${page}&per_page=12`
          );
        page >= 5 && dispatch(setHasMore(false));
        console.log(data)
        dispatch(setImages(data));
        dispatch(setPage(page + 1));
    } catch (error) {
        console.log(error)
    }
}
