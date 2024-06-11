 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "../reducers/properties/PropertiesSlice";
import userLoginReducer from "../reducers/userLogin/UserLoginSlice";
import reservationStadiumReducer from "../reducers/reservationStadium/ReservationStadiumSlice"
import consultStadiumReducer from "../reducers/consultStadium/ConsultStadiumSlice"
import editFormReservationSlice from "../reducers/editFormReservationStadium/EditFormReservationSlice";

export default configureStore({
    reducer: {
       properties: propertiesReducer,
       userLogin: userLoginReducer,
       reservationStadium: reservationStadiumReducer,
       consultStadium: consultStadiumReducer,
       editFormReservationSlice: editFormReservationSlice
    }
})  