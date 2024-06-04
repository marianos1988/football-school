
import { createSlice } from "@reduxjs/toolkit";
import { ConsultStadiumSlice } from "../../types/TypesReducers";


const initialState:ConsultStadiumSlice = {
    cantStadium: 3,
    allStadium: false,
    dateSelected: ""
}

export const consultStadiumSlice = createSlice({
    name: "consultStadium",
    initialState: initialState,
    reducers: {
        activeAllStadium: (state:ConsultStadiumSlice) => {
            state.allStadium = true;
        },
        inactiveAllStadium: (state:ConsultStadiumSlice) => {
            state.allStadium = false;
        },
        setDateSelected: (state: ConsultStadiumSlice, action) => {
            state.dateSelected = action.payload;
        },
        unsetDateSelected: (state: ConsultStadiumSlice) => {
            state.dateSelected = ""
        }
    }

})

export const { activeAllStadium, inactiveAllStadium,setDateSelected,unsetDateSelected } = consultStadiumSlice.actions;

export default consultStadiumSlice.reducer;