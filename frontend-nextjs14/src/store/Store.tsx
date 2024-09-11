 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "@/reducers/properties/PropertiesSlice";
import consultStadiumReducer from "@/reducers/consultStadium/ConsultStadiumSlice";
import errorsReducer from "@/reducers/errorsSlice/ErrorsSlices";


export default configureStore({
    reducer: {
       properties: propertiesReducer,
       error: errorsReducer,
       consultStadium: consultStadiumReducer,

    }
})  