import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NEXT_MONTH, PREV_MONTH} from "modules/consts.ts";
import {api} from "modules/api.ts";
import {AsyncThunkConfig, T_CartDataResponse, T_TariffUpdateValue} from "modules/types"
import {Forecast, Forecasts, TariffItem} from "src/api/Api.ts";
import {T_ForecastsFilters} from "modules/types.ts";

type T_ForecastsSlice = {
    draft_forecast_id: number,
    tariffs_count: number ,
    forecast: Forecast | null,
    forecasts: Forecasts[],
    filters: T_ForecastsFilters
}

const initialState:T_ForecastsSlice = {
    draft_forecast_id: 0,
    tariffs_count: 0,
    forecast: null,
    forecasts: [],
    filters: {
        status: 0,
        date_formation_start: PREV_MONTH.toISOString().split('T')[0],
        date_formation_end: NEXT_MONTH.toISOString().split('T')[0]
    }
}

export const fetchCartData = createAsyncThunk<T_CartDataResponse, void, AsyncThunkConfig>(
    "forecasts/cart",
    async function() {
        const response = await api.forecasts.forecastsCartList()
        return response.data
    }
)

export const fetchForecast = createAsyncThunk<Forecast, string, AsyncThunkConfig>(
    "forecasts/forecast",
    async function(forecast_id) {
        const response = await api.forecasts.forecastsRead(forecast_id)
        return response.data
    }
)

export const fetchForecasts = createAsyncThunk<Forecasts[], void, AsyncThunkConfig>(
    "forecasts/forecasts",
    async function(_, thunkAPI) {
        const state = thunkAPI.getState()

        const response = await api.forecasts.forecastsList({
            status: state.forecasts.filters.status,
            date_formation_start: state.forecasts.filters.date_formation_start,
            date_formation_end: state.forecasts.filters.date_formation_end
        })

        return response.data
    }
)

export const removeTariffFromDraftForecast = createAsyncThunk<TariffItem[] | null, number, AsyncThunkConfig>(
    "forecasts/remove_tariff",
    async function(tariff_id, thunkAPI) {
        const state = thunkAPI.getState()
        if (state.forecasts.forecast) {
            const response = await api.forecasts.forecastsDeleteTariffDelete(state.forecasts.forecast.id.toString(), tariff_id.toString())
            return response.data
        }

        return null
    }
)

export const deleteDraftForecast = createAsyncThunk<void, void, AsyncThunkConfig>(
    "forecasts/delete_draft_forecast",
    async function(_, {getState}) {
        const state = getState()
        if (state.forecasts.forecast) {
            await api.forecasts.forecastsDeleteDelete(state.forecasts.forecast.id.toString())
        }
    }
)

export const sendDraftForecast = createAsyncThunk<void, void, AsyncThunkConfig>(
    "forecasts/send_draft_forecast",
    async function(_, {getState}) {
        const state = getState()
        if (state.forecasts.forecast) {
            await api.forecasts.forecastsUpdateStatusUserUpdate(state.forecasts.forecast.id.toString())
        }
    }
)

export const updateForecast = createAsyncThunk<void, Partial<Forecast>, AsyncThunkConfig>(
    "forecasts/update_forecast",
    async function(data, {getState}) {
        const state = getState()
        if (state.forecasts.forecast) {
            await api.forecasts.forecastsUpdateUpdate(state.forecasts.forecast.id.toString(), data as Forecast)
        }
    }
)

export const updateTariffValue = createAsyncThunk<void, T_TariffUpdateValue, AsyncThunkConfig>(
    "forecasts/update_mm_value",
    async function({tariff_id, count},thunkAPI) {
        const state = thunkAPI.getState()
        if (state.forecasts.forecast) {
            await api.forecasts.forecastsUpdateTariffUpdate(state.forecasts.forecast.id.toString(), tariff_id.toString(), {count})
        }
    }
)

const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState: initialState,
    reducers: {
        removeForecast: (state) => {
            state.forecast = null
        },
        updateFilters: (state, action) => {
            state.filters = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartData.fulfilled, (state, action: PayloadAction<T_CartDataResponse>) => {
            state.draft_forecast_id = action.payload.draft_forecast
            state.tariffs_count = action.payload.tariffs_count
        });
        builder.addCase(fetchForecast.fulfilled, (state, action: PayloadAction<Forecast>) => {
            state.forecast = action.payload
        });
        builder.addCase(fetchForecasts.fulfilled, (state, action: PayloadAction<Forecast[]>) => {
            state.forecasts = action.payload
        });
        builder.addCase(removeTariffFromDraftForecast.rejected, (state) => {
            state.forecast = null
        });
        builder.addCase(removeTariffFromDraftForecast.fulfilled, (state, action: PayloadAction<TariffItem[] | null>) => {
            if (state.forecast && action.payload) {
                state.forecast.tariffs = action.payload
            }
        });
        builder.addCase(sendDraftForecast.fulfilled, (state:T_ForecastsSlice) => {
            state.forecast = null
        });
    }
})

export const { removeForecast, updateFilters } = forecastsSlice.actions;

export default forecastsSlice.reducer
