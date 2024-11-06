import { InitialErrorsPoster } from "@/types/TypesReducers"
import { createSlice } from "@reduxjs/toolkit"

const initialState:InitialErrorsPoster = {
    isActive: false,
    messageTittle: "", 
    messageSubtittle:"",
}

export const errorsPosterSlice = createSlice({
    name: "errorPoster",
    initialState: initialState,
    reducers: {
        activeErrorPoster: (state:InitialErrorsPoster, action) => {
            state.isActive = true;
            state.messageTittle = action.payload.messageTittle;
            state.messageSubtittle = action.payload.messageSubtittle;

        },
        inactiveErrorPoster: (state:InitialErrorsPoster) => {
            state.isActive = false;
            state.messageTittle = "";
            state.messageSubtittle = ""
        }
    }
})

export const { activeErrorPoster, inactiveErrorPoster } = errorsPosterSlice.actions;

export default errorsPosterSlice.reducer;