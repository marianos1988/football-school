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

  const changeViewPass = () => {
    setStatePass(!statePass);
  }

  const submitLogin = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(formLogin);
  }

  return {
    onInputChange,
    formLogin,
    submitLogin,
    changeViewPass
  }

  
}

