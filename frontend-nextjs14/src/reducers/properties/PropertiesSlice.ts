import { createSlice } from "@reduxjs/toolkit"; 
import { PropertiesSlice } from "../../types/TypesReducers";

const initialState:PropertiesSlice = {
    blur: false,
    navLayer: false,
    section: "home",
    btnBurguer: false,
    stateSpinner: false,
    stateSpinner2: false,
    stateConfirmationPoster: false,
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
    setNavLayer: (state:PropertiesSlice) => {
      state.navLayer = true;
    },
    unsetNavLayer: (state:PropertiesSlice) => {
      state.navLayer = false;
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
    setStateSpinner2: (state:PropertiesSlice) => {
      state.stateSpinner2 = true;
    },
    unsetStateSpinner2: (state:PropertiesSlice) => {
      state.stateSpinner2 = false;
    },
    activePosterConfirmation: (state:PropertiesSlice) => {
      state.stateConfirmationPoster = true;
    },
    inactivePosterConfirmation: (state:PropertiesSlice) => {
      state.stateConfirmationPoster = true;
    },
  }
});

export const { setBlur, unsetBlur, setNavLayer, unsetNavLayer, selectSection,setBurguer, unsetBurguer, setStateSpinner, unsetStateSpinner, setStateSpinner2, unsetStateSpinner2, activePosterConfirmation, inactivePosterConfirmation } = propertiesSlice.actions;

export default propertiesSlice.reducer;