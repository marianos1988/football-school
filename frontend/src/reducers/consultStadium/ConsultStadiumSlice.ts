
import { createSlice } from "@reduxjs/toolkit";
import { ConsultStadiumSlice } from "../../types/TypesReducers";

const dateToday = new Date();
let month = "";
let date = "";

if(dateToday.getDate() < 10) {
    date = `0${dateToday.getDate()}`
}
if((dateToday.getMonth()+1) < 10) {
    month = `0${dateToday.getMonth()+1}`
}
const finalDate =  `${dateToday.getFullYear()}-${month}-${date}` 


const initialState:ConsultStadiumSlice = {
    cantStadium: 3,
    allStadium: false,
    dateSelected: finalDate
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
        addZero: (num:any) => {
            if(num < 10) return `0${num}`;
            else if(num > 9) return num;
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

function addZero(arg0: number) {
    throw new Error("Function not implemented.");
}
