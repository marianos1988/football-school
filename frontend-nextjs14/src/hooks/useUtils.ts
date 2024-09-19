"use client"
import { useDispatch } from "react-redux";
import { setStateSpinner, unsetStateSpinner } from "../reducers/properties/PropertiesSlice";
import { setDateSelected, inactiveAllStadium } from "../reducers/consultStadium/ConsultStadiumSlice";
import { inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { useState } from "react";
import { FormReservationInitial } from "@/types/TypesFormReservation";




export const useUtils = () => {
  const dispatch = useDispatch();
  
  const checkLogin = async ()=> {

    const data = await fetch("http://localhost:3001/auth/login/api");
    const dataCheckLogin = await data.json();

    return dataCheckLogin;

  }

  
  
  // const isOnlyNumber = (texto:any) => {
  //   // Expresión regular para verificar si el texto contiene solo números
  //   let regex = /^[0-9]+$/;
    
  //   // Usamos el método test de la expresión regular para verificar si coincide con el texto
  //   if (regex.test(texto)) {
  //     return true; // El texto contiene solo números
  //   } else {
  //     return false; // El texto contiene otros caracteres además de números
  //   }
  // }

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

  const [errorMessage, setErrorMessage] = useState({
    message: "",
    color: ""
  });


  // const validationFormReservation = (object:FormReservationInitial) => {

  //   const todayDate = new Date();
  //   const dateObject = new Date(object.date);
  //   dateObject.setDate(dateObject.getDate()+1);


  //   if(object.nameClient.length < 4) {
  //     setErrorMessage({message:"Nombre demasiado corto",color:"red"});
  //     return false;
  //   }
  //   else if(!isOnlyNumber(object.phone)) {
  //     setErrorMessage({message:"Debes ingresar un telefono correcto",color:"red"});
  //     return false;
  //   }
  //   else if(object.phone.length < 8) {
  //     setErrorMessage({message:"Telefono demasiado corto",color:"red"});
  //   }
  //   else if(object.date === "") {
  //     setErrorMessage({message:"Ingrese una fecha correcta",color:"red"});
  //     return false;
  //   }
  //   else if(dateObject < todayDate) {
  //     setErrorMessage({message:"La fecha es anterior al día de hoy",color:"red"});
  //     return false;
  //   }
  //   else if(object.time === "") {
  //     setErrorMessage({message:"Ingrese una hora correcta",color:"red"});
  //     return false;
  //   }
  //   else if(!isOnlyNumber(object.cash)) {
  //     setErrorMessage({message:"Debes ingresar un importe correcto",color:"red"});
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }

  // }

  return {
    checkLogin,
    // isOnlyNumber,
    useFetch,
    getFullDate,
    getTodayDate,
    resetAllParameters,
    // validationFormReservation
  }

}