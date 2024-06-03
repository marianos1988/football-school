
import { createSlice } from "@reduxjs/toolkit";
import { ConsultStadiumSlice } from "../../types/TypesReducers";


const initialState:ConsultStadiumSlice = {
    cantStadium: 3,
    allStadium: false,
}

export const consultStadiumSlice = createSlice({
    name: "consultStadium",
    initialState: initialState,
    reducers: {
        activeAllStadium: (state:ConsultStadiumSlice) => {
            state.allStadium = true;
        },
        inactiveAllStadium: (state:ConsultStadiumSlice) => {
            state.allStadium = false;
        },
    }

})

export const { activeAllStadium, inactiveAllStadium } = consultStadiumSlice.actions;

export default consultStadiumSlice.reducer;