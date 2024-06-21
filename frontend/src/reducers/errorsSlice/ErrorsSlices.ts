import { createSlice } from "@reduxjs/toolkit";
import { Errors } from "../../types/TypesReducers";

const initialState:Errors = {
    isActive: false,
    message: ""
}

export const errorsSlice = createSlice({
    name: "errors",
    initialState: initialState,
    reducers: {
        activeError: (state:Errors, action) => {
            state.isActive = true;
            state.message = action.payload;
        },
        inactiveError: (state:Errors) => {
            state.isActive = false;
            state.message = ""
        }
    }
}) 

export const { activeError, inactiveError } = errorsSlice.actions;

export default errorsSlice.reducer;
