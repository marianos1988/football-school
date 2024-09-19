"use client"
import { useDispatch } from "react-redux";
import { setStateSpinner, unsetStateSpinner } from "../reducers/properties/PropertiesSlice";
import { setDateSelected, inactiveAllStadium } from "../reducers/consultStadium/ConsultStadiumSlice";
import { inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { useState } from "react";


export const useUtils = () => {
  const dispatch = useDispatch();
  
  const checkLogin = async ()=> {

    const data = await fetch("http://localhost:3001/auth/login/api");
    const dataCheckLogin = await data.json();

    return dataCheckLogin;

  }



  const useFetch = async (url:string, sendContent:any) => {

    let JSData;

    try {
      if(sendContent === "") {
        dispatch(setStateSpinner())
        JSData = await fetch(`${url}`);
      }
      else {

        let object = {
                
          method : "POST",
          body : JSON.stringify(
            sendContent
            ),
          headers : {
              "Content-type" : "application/json"
          }
        }
        dispatch(setStateSpinner())
        JSData = await fetch(`${url}`,object);
      }
  
      const data = await JSData.json();
      dispatch(unsetStateSpinner());
      return data;
    }catch {

    }

  }

  const addCero = (number:number)=> {
    if(number < 10) return `0${number}`;
    else if(number >9) return number;
  }
  
  const getFullDate = (date:Date)=> {

    const finalDate = `${date.getFullYear()}-${addCero(date.getMonth()+1)}-${addCero(date.getDate())}`;
 
    return finalDate;
  }

  const getTodayDate = ()=> {
    const todayDate = getFullDate(new Date());
    dispatch(setDateSelected(todayDate));
  }

  const resetAllParameters = () => {
    dispatch(inactiveAllStadium());
    getTodayDate();
    dispatch(inactiveError());

  }

  return {
    checkLogin,
    useFetch,
    getFullDate,
    getTodayDate,
    resetAllParameters,
  }

}