import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainSlice from './mainSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    mainSlice,
    // [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;