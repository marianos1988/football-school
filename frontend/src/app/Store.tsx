 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "../reducers/properties/PropertiesSlice";
import userLoginReducer from "../reducers/userLogin/UserLoginSlice";
import reservationStadiumReducer from "../reducers/reservationStadium/ReservationStadiumSlice";
import consultStadiumReducer from "../reducers/consultStadium/ConsultStadiumSlice";
import errorsReducer from "../reducers/errorsSlice/ErrorsSlices";


export default configureStore({
    reducer: {
       properties: propertiesReducer,
       error: errorsReducer,
       userLogin: userLoginReducer,
       reservationStadium: reservationStadiumReducer,
       consultStadium: consultStadiumReducer,

    }
})  