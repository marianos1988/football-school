import { createSlice } from "@reduxjs/toolkit";
import { LoginSlice } from "../../types/TypesReducers";


const initialState:LoginSlice = {
    id: 0,
    username: ""
}

export const UserLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setLogin: (state:LoginSlice, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username 
    },
    unsetLogin: (state:LoginSlice) => {
      state.id = 0;
      state.username = "";
    }
  }
});

export const { setLogin, unsetLogin } = UserLoginSlice.actions;

export default UserLoginSlice.reducer;