import { useSelector, useDispatch } from "react-redux";
import  { UserLogin } from "../types/TypesUtils";
import { unsetLogin } from "../reducers/userLogin/UserLoginSlice"
import { useNavigate } from "react-router-dom";





export const useUtils = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state:UserLogin) => state.userLogin);



  const checkLogin = ()=> {
    if(login.id < 1 || login.username === "") {
      dispatch(unsetLogin());
      navigate("/");
    }
  }
  
  const isOnlyNumber = (texto:any) => {
    // Expresión regular para verificar si el texto contiene solo números
    let regex = /^[0-9]+$/;
    
    // Usamos el método test de la expresión regular para verificar si coincide con el texto
    if (regex.test(texto)) {
      return true; // El texto contiene solo números
    } else {
      return false; // El texto contiene otros caracteres además de números
    }
  }

  const useFetch = async (url:string, sendContent:any) => {

    let JSData;

    try {
      if(sendContent === "") {
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
        JSData = await fetch(`${url}`,object);
      }
  
      const data = await JSData.json();
      return data;
    }catch {

    }

  }

  return {
    checkLogin,
    isOnlyNumber,
    useFetch
  }

}