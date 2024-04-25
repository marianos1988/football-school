import { createSlice } from "@reduxjs/toolkit"; 
import { PropertiesSlice } from "../../types/TypesReducers";

const initialState:PropertiesSlice = {
    blur: false,
    section: "home",
    btnBurguer: false,
    stateSpinner: false
}

export const propertiesSlice = createSlice({
  name: "properties", 
  initialState: initialState,
  reducers: {
    setBlur:(state:PropertiesSlice) => {
      state.blur = true;
    },
    unsetBlur: (state:PropertiesSlice) => {
      state.blur = false;
    },
    selectSection: (state:PropertiesSlice, action) => {
      state.section = action.payload;
    },
    setBurguer: (state:PropertiesSlice ) => {
      state.btnBurguer = true;
    },
    unsetBurguer: (state:PropertiesSlice ) => {
      state.btnBurguer = false;
    },
    setStateSpinner: (state:PropertiesSlice) => {
      state.stateSpinner = true;
    },
    unsetStateSpinner: (state:PropertiesSlice) => {
      state.stateSpinner = false;
    },
  }
});

export const { setBlur, unsetBlur, selectSection,setBurguer, unsetBurguer, setStateSpinner, unsetStateSpinner } = propertiesSlice.actions;

export default propertiesSlice.reducer;