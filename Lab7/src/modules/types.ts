import {AppThunkDispatch, RootState} from "store/store.ts"; // импорт вашего RootState

export interface AsyncThunkConfig {
    state: RootState;
    dispatch: AppThunkDispatch;
}

export type T_ForecastsFilters = {
    date_formation_start: string
    date_formation_end: string
    status: number
}

export type T_CartDataResponse = {
    tariffs_count: number,
    draft_forecast: number
}

export type T_TariffUpdateValue = {
    tariff_id: number,
    count: number
}

export enum E_ForecastStatus {
    Draft=1,
    InWork,
    Completed,
    Rejected,
    Deleted
}
