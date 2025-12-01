import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from "./slices/userSlice.ts"
import forecastsReducer from "./slices/forecastsSlice.ts"
import tariffsReducer from "./slices/tariffsSlice.ts"

export const store = configureStore({
    reducer: {
        user: userReducer,
        forecasts: forecastsReducer,
        tariffs: tariffsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
