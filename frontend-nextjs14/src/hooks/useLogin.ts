import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setStateSpinner, unsetBlur, unsetBurguer, unsetNavLayer, unsetStateSpinner} from "../reducers/properties/PropertiesSlice";
import { activeError, inactiveError } from '../reducers/errorsSlice/ErrorsSlices';
import { ErrorStore } from "@/types/TypesLogin";
import { useUtils } from './useUtils';
import { useRouter } from 'next/navigation';



type Target = {
    value: string,
    name: string
}

export const useLogin = () => { 

  const { resetAllParameters } = useUtils();
  const dispatch = useDispatch();
  const route = useRouter();


    const { isActive } = useSelector((state:ErrorStore) => state.error)
    const [formLogin, setFormLogin] = useState({username: "", password: ""});
    const [statePass, setStatePass] = useState(false);


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
 
      const JSONLogin = await fetch("http://localhost:3001/auth/login/api",objetoHeaderLogin);

      const usuario = await JSONLogin.json();
      dispatch(unsetStateSpinner()); 
     if(usuario.isThereError) {
        dispatch(activeError(usuario));
        return false;
     } else {
      return true
     }

    } catch(e) {
      dispatch(activeError("Error al conectar con el servidor"));
      dispatch(unsetStateSpinner());
      return false;
    } 
  }

  const logout = async () => {

    const dataLogout = await fetch("http://localhost:3001/auth/logout/api");
    const data = await dataLogout.json();

    

    if(data) {

      if(document.body.classList.contains("open")) {
        document.body.classList.toggle("open");
      }
  
      dispatch(unsetBlur()); 
      dispatch(unsetBurguer());
      dispatch(unsetNavLayer());
      resetAllParameters();

      route.push("/auth/login"); 
    }
  }

  return {
    onInputChange,
    formLogin,
    submitLogin,
    ViewPass,
    statePass,
    logout
  }

  
}

