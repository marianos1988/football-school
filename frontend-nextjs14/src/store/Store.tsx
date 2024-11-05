 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "@/reducers/properties/PropertiesSlice";
import errorsReducer from "@/reducers/errorsSlice/ErrorsSlices";
import errorsPosterReducer from "@/reducers/errorsPoster/errorPosterSlice"


export default configureStore({
    reducer: {
       properties: propertiesReducer,
       error: errorsReducer,
       errorPoster: errorsPosterReducer,


    }
})  