import { createSlice, } from "@reduxjs/toolkit";
import { PropertiesSlice } from "../../types/TypesReducers";

const initialState:PropertiesSlice = {
    blur: false,
    section: "home"
}

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialState,
  reducers: {
    setBlur:(state:PropertiesSlice) => {
      state.blur = true;
    },
    unsetBlur: (state:PropertiesSlice) => {
      state.blur = false
    },
    selectSection: (state:PropertiesSlice, action) => {
      state.section = action.payload;
    }
  }
});

export const { setBlur, unsetBlur, selectSection } = propertiesSlice.actions;

export default propertiesSlice.reducer;