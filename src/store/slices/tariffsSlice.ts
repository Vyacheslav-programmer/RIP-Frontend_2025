import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AsyncThunkConfig} from "modules/types"
import {api} from "modules/api.ts";
import {Tariff, Tariffs} from "src/api/Api.ts";

type T_TariffsSlice = {
    tariff_name: string
    tariff: Tariff | null;
    tariffs: Tariffs[]
}

const initialState:T_TariffsSlice = {
    tariff_name: "",
    tariff: null,
    tariffs: []
}

export const fetchTariffs = createAsyncThunk<Tariffs[], void, AsyncThunkConfig>(
    "fetch_tariffs",
    async function(_, thunkAPI) {
        const state = thunkAPI.getState();
        const response = await api.tariffs.tariffsList({
            tariff_name: state.tariffs.tariff_name
        })

        return response.data
    }
)

export const fetchTariff = createAsyncThunk<Tariff, string, AsyncThunkConfig>(
    "fetch_tariff",
    async function(id) {
        const response = await api.tariffs.tariffsRead(id)
        return response.data
    }
)


export const addTariffToForecast = createAsyncThunk<void, number, AsyncThunkConfig>(
    "tariffs/add_tariff_to_forecast",
    async function(tariff_id) {
        await api.tariffs.tariffsAddToForecastCreate(tariff_id.toString())
    }
)

const tariffsSlice = createSlice({
    name: 'tariffs',
    initialState: initialState,
    reducers: {
        updateTariffName: (state, action: PayloadAction<string>) => {
            state.tariff_name = action.payload
        },
        removeSelectedTariff: (state) => {
            state.tariff = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTariffs.fulfilled, (state, action: PayloadAction<Tariffs[]>) => {
            state.tariffs = action.payload
        });
        builder.addCase(fetchTariff.fulfilled, (state, action: PayloadAction<Tariff>) => {
            state.tariff = action.payload
        });
    }
})

export const { updateTariffName, removeSelectedTariff} = tariffsSlice.actions;

export default tariffsSlice.reducer
