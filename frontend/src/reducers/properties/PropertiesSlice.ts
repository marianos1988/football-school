import { createSlice, } from "@reduxjs/toolkit";
import { PropertiesSlice } from "../../types/TypesReducers";

const initialState:PropertiesSlice = {
    blur: false
}

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialState,
  reducers: {
    setAndUnsetBlur:(state:PropertiesSlice) => {
      state.blur = !state.blur;
    },
  }
});

export const { setAndUnsetBlur } = propertiesSlice.actions;

export default propertiesSlice.reducer;