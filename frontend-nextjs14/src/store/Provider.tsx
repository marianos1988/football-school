"use client"
import { Provider } from "react-redux";
import Store from "./Store";


const Providers = ({ children }:any) => {
    return  <Provider store={Store}>
      {children}
    </Provider>
  }
  
  export default Providers;
  