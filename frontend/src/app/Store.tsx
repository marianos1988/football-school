 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "../reducers/properties/PropertiesSlice"

export default configureStore({
    reducer: {
       properties: propertiesReducer,
    }
})  