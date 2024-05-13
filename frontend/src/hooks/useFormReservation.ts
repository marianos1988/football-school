import { useState } from 'react'
import { FormReservationInitial } from '../types/TypesFormReservation';
import { Target } from '../types/TypesReservationStadium';
import { useSelector } from 'react-redux';
import { ReservationStadiumSlice } from '../types/TypesReducers';
import { useUtils } from './useUtils';




export const useFormReservation = () => {
  const { idStadium } = useSelector((state:ReservationStadiumSlice) => state.reservationStadium)
  const initialState:FormReservationInitial = {
    idStadium: idStadium,
    nameClient: "",
    date: "",
    time: "",
    cash: 0,
  }
  const { isOnlyNumber, useFetch } = useUtils();
  const [formReservation, setFormReservation] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    color: ""
  });



  const validationFormReservation = (object:FormReservationInitial) => {

    const todayDate = new Date();
    const dateObject = new Date(object.date);
    dateObject.setDate(dateObject.getDate()+1);

    console.log(typeof object.cash)


    console.log(todayDate);
    console.log(dateObject);

    if(object.nameClient.length < 4) {
      setErrorMessage({message:"Nombre demasiado corto",color:"red"});
      return false;
    }
    else if(object.date === "") {
      setErrorMessage({message:"Ingrese una fecha correcta",color:"red"});
      return false;
    }
    else if(dateObject < todayDate) {
      setErrorMessage({message:"La fecha es anterior al día de hoy",color:"red"});
      return false;
    }
    else if(object.time === "") {
      setErrorMessage({message:"Ingrese una hora correcta",color:"red"});
      return false;
    }
    else if(!isOnlyNumber(object.cash)) {
      setErrorMessage({message:"Debes ingresar un importe correcto",color:"red"});
      return false;
    }
    else {
      return true;
    }

  }

  const submitReserve = async (e:any) => {
    e.preventDefault();
    setErrorMessage({message:"",color:""});
    const validation = validationFormReservation(formReservation);
    if(validation) {
      const data = await useFetch("http://localhost:3000/Reservar",formReservation);
      console.log(data)

      
      if(data === "Datos invalidos") {
        setErrorMessage(data)
      } else {
        // setErrorMessage({message:"Reserva confirmada",color:"green"});
        // setFormReservation({
        //   idStadium: idStadium,
        //   nameClient: "",
        //   date: "",
        //   time: "",
        //   cash: 0,
        // })
      }
    }
  }

  const handleChangeForm = ({ target }:any ) => {
    const {name, value}:Target = target;

    if(name === "cash"){
      setFormReservation({
        ...formReservation,
        [name]: parseInt(value),
      })
    } else {
      setFormReservation({
        ...formReservation,
        [name]: value,
      })
    }
    setFormReservation({
      ...formReservation,
      [name]: value,
    })
  }

  const handleOnFocus = ()=> {
    setErrorMessage({
      message: "",
      color: ""
    })
  }


    

  return {
    formReservation,
    handleChangeForm,
    submitReserve,
    errorMessage,
    handleOnFocus
  }
}