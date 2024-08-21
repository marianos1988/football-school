import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setStateSpinner, unsetStateSpinner} from "../reducers/properties/PropertiesSlice";
import { setLogin } from "../reducers/userLogin/UserLoginSlice"
import { activeError, inactiveError } from '../reducers/errorsSlice/ErrorsSlices';
import { ErrorStore } from "@/types/TypesLogin";


type Target = {
    value: string,
    name: string
}

export const useLogin = () => { 
  const dispatch = useDispatch();
  // const navigate = useNavigate();
   const { isActive } = useSelector((state:ErrorStore) => state.error)
  const [formLogin, setFormLogin] = useState({username: "", password: ""})
  const [statePass, setStatePass] = useState(false);
  // const [messageError, setMessageError] = useState("");

  const onInputChange = ({ target }:any) => {
    if(isActive) {
      dispatch(inactiveError());
    }
    const {name, value}:Target = target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    })

  } 

  const ViewPass = () => {
    setStatePass(!statePass);
  }



  const submitLogin = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(setStateSpinner());

    try {
      let objetoHeaderLogin = {
                
        method : "POST",
        body : JSON.stringify(
          formLogin
          ),
        headers : {
            "Content-type" : "application/json"
        }
      }

      const JSONLogin = await fetch("http://localhost:3001/panel/auth/login/api",objetoHeaderLogin);
      const usuario = await JSONLogin.json();
      dispatch(unsetStateSpinner());
     if(usuario) {
        dispatch(activeError(usuario));
     }

    } catch(e) {
      dispatch(activeError("Error al conectar con el servidor"));
      dispatch(unsetStateSpinner());
    } 
  }

  return {
    onInputChange,
    formLogin,
    submitLogin,
    ViewPass,
    statePass,
    // messageError
  }

  
}

