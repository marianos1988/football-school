import { createSlice } from "@reduxjs/toolkit";
import { ReservationStadiumSlice } from "../../types/TypesReducers";

const initialState:ReservationStadiumSlice = {
  idStadium: 0,
  reservationStadium: {
    idStadium: 0
  }
} 

export const reservationStadiumSlice = createSlice({
  name: "reservationStadium",
  initialState:initialState,
  reducers:{
    setIdStadium: (state:ReservationStadiumSlice,action) => {
      state.idStadium = action.payload;
    }
  }
});

export const { setIdStadium } = reservationStadiumSlice.actions;

export default reservationStadiumSlice.reducer;