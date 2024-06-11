import { createSlice } from "@reduxjs/toolkit";
import { FormReservation } from "../../types/TypesReducers";


const initialState:FormReservation = {
    idStadium: 0,
    nameClient: "",
    phone: "",
    date: "",
    time: "",
    cash: 0,
}

export const editFormReservation = createSlice({
    name: "formReservation",
    initialState: initialState,
    reducers: {
        setFormReservation: (state:FormReservation,action) => {

            state.idStadium = action.payload.idStadium;
            state.nameClient = action.payload.nameClient;
            state.phone = action.payload.phone;
            state.date = action.payload.date;
            state.time = action.payload.time;
            state.cash = action.payload.cash;

        },
        resetFormReservation: (state:FormReservation,action) => {

            state.idStadium = 0;
            state.nameClient = "";
            state.phone = "";
            state.date = "";
            state.time = "",
            state.cash = 0
            
        }
    }

}) 

export const { setFormReservation, resetFormReservation } = editFormReservation.actions;

export default editFormReservation.reducer;