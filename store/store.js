import {configureStore} from '@reduxjs/toolkit'
import unsplashReducer from './reducers/unsplashReducers'
export const store =  configureStore({
    reducer: { 
        unsplashReducer,
     },
})