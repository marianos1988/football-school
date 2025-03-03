"use client"
import { useDispatch } from "react-redux";
import { setStateSpinner, unsetStateSpinner } from "../reducers/properties/PropertiesSlice";


import { inactiveError, activeError } from "../reducers/errorsSlice/ErrorsSlices";
import { activeErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";
import { setBlur } from "../reducers/properties/PropertiesSlice";


export const useUtils = () => {
  const dispatch = useDispatch();
  
  const checkLogin = async ()=> {

    const token = localStorage.getItem("token");
    
    const data = await useFetch("http://localhost:3001/auth/login/verifyLogin/api",token);

    if(data.isThereError) { 

      dispatch(activeError(data.message));

            
        if(localStorage.getItem("token")) {
          localStorage.removeItem("token") 
        }


      return false;
    
    } else {
 
      return true;
    }





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

    

  const resetAllParameters = () => {
    dispatch(inactiveError());

  }

  const objectToSendWithPost = (object:any) => {
    let objeto = {
                
      method : "POST",
      body : JSON.stringify({
       data: object

      } 
        ),
      headers : {
          "Content-type" : "application/json"
      }
    }

    return objeto;
  }

  const runErrorPoster = (tittle:string,subtittle:string) => {
    dispatch(setBlur());
    dispatch(activeErrorPoster({messageTittle:tittle,messageSubtittle:subtittle}));

  }


  return {
    checkLogin,
    useFetch,
    getFullDate,
    addCero,
    resetAllParameters,
    objectToSendWithPost,
    runErrorPoster,
  }

}