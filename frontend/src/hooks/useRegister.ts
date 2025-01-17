import { ErrorStore } from "@/types/TypesLogin";
import { PropertiesRegister } from "@/types/TypesRegister";
import { Target } from "@/types/TypesReservationStadium";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeError, inactiveError } from '../reducers/errorsSlice/ErrorsSlices';
;


export const useRegister = () => {

  const dispatch = useDispatch();
  const initialRegister: PropertiesRegister = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordRepeat: ""
  }

  const { isActive } = useSelector((state:ErrorStore) => state.error)
  const [statePass, setStatePass] = useState(false);
  const [statePass2, setStatePass2] = useState(false);
  const [formRegister, setFormRegister] = useState(initialRegister);

  const viewPass = () => {
    setStatePass(!statePass);
  }

  const viewPass2 = () => {
    setStatePass2(!statePass2);
  }

  const onInputChange = ({ target }:any) => {
    if(isActive) { 
      dispatch(inactiveError());
    }
    const {name, value}:Target = target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    })

  } 
  
 

  const register =  (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(formRegister)
  }

  return {
    statePass,
    statePass2,
    viewPass,
    viewPass2,
    register,
    formRegister,
    onInputChange
  }
}

