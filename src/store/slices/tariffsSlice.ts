import {createSlice} from "@reduxjs/toolkit";

type T_TariffsSlice = {
    tariff_name: string
}

const initialState:T_TariffsSlice = {
    tariff_name: "",
}


const tariffsSlice = createSlice({
    name: 'tariffs',
    initialState: initialState,
    reducers: {
        updateTariffName: (state, action) => {
            state.tariff_name = action.payload
        }
    }
})

export const { updateTariffName} = tariffsSlice.actions;

export default tariffsSlice.reducer