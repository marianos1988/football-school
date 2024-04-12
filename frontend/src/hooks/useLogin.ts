import { useState } from 'react'


type Target = {
    value: string,
    name: string
}

export const useLogin = () => {

  const [formLogin, setFormLogin] = useState({username: "", password: ""})
  const [statePass, setStatePass] = useState(false);

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

      const JSONLogin = await fetch("http://localhost:3000/login",objetoHeaderLogin);
      const usuario = await JSONLogin.json();

      console.log(usuario)

    } catch(e) {
      console.log(e);
    }
  }

  return {
    onInputChange,
    formLogin,
    submitLogin,
    ViewPass,
    statePass
  }

  
}

