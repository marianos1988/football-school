
import { createSlice } from "@reduxjs/toolkit";
import { ConsultStadiumSlice } from "../../types/TypesReducers";
import { reservationStadiumSlice } from "../reservationStadium/ReservationStadiumSlice";

const initialState:ConsultStadiumSlice = {
    cantStadium: 3,
    allStadium: false,
}

export const consultStadiumSlice = createSlice({
    name: "consultStadium",
    initialState: initialState,
    reducers: {
        setAllStadium: (state:ConsultStadiumSlice) => {
            state.allStadium = !state.allStadium;
        }
    }

})

export const { setAllStadium } = consultStadiumSlice.actions;

export default reservationStadiumSlice.reducer;