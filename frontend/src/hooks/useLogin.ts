import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setStateSpinner, unsetStateSpinner} from "../reducers/properties/PropertiesSlice";
import { setLogin } from "../reducers/userLogin/UserLoginSlice"


type Target = {
    value: string,
    name: string
}

export const useLogin = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({username: "", password: ""})
  const [statePass, setStatePass] = useState(false);
  const [messageError, setMessageError] = useState("");

  const onInputChange = ({ target }:any) => {
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

      const JSONLogin = await fetch("http://localhost:3000/",objetoHeaderLogin);
      const usuario = await JSONLogin.json();
      dispatch(unsetStateSpinner());
     if(usuario === "Datos incorrectos" || usuario === "Usuario o clave incorrecta" || usuario === "No se puede conectar a la base de datos") {
        setMessageError(usuario);

     } else if(usuario.id > 0 && usuario.username.length > 0) {
      dispatch(setLogin(usuario))
      navigate("/Home");
     }


    } catch(e) {
      setMessageError("Error al conectar con el servidor");
      dispatch(unsetStateSpinner());
    }
  }

  return {
    onInputChange,
    formLogin,
    submitLogin,
    ViewPass,
    statePass,
    messageError
  }

  
}

