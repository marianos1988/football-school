 import { configureStore } from "@reduxjs/toolkit";


// Reducers
import propertiesReducer from "../reducers/properties/PropertiesSlice";
import userLoginReducer from "../reducers/userLogin/UserLoginSlice";

export default configureStore({
    reducer: {
       properties: propertiesReducer,
       userLogin: userLoginReducer
    }
})  