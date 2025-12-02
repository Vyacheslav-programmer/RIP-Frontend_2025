import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import tariffsReducer from "./slices/tariffsSlice.ts"

export const store = configureStore({
    reducer: {
        tariffs: tariffsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;