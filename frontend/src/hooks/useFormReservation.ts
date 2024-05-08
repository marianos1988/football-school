import { useState } from 'react'
import { FormReservationInitial } from '../types/TypesFormReservation';
import { Target } from '../types/TypesReservationStadium';
import { useSelector } from 'react-redux';
import { ReservationStadiumSlice } from '../types/TypesReducers';
import { useUtils } from './useUtils';




export const useFormReservation = () => {

  const initialState:FormReservationInitial = {
    idStadium: 0,
    nameClient: "",
    date: "",
    time: "",
    cash: 0,
  }
  const { isOnlyNumber } = useUtils();
  const [formReservation, setFormReservation] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  // const { idStadium } = useSelector((state:ReservationStadiumSlice) => state.reservationStadium)

  const validationFormReservation = (object:FormReservationInitial) => {

    const todayDate = new Date();
    const dateObject = new Date(object.date);
    dateObject.setDate(dateObject.getDate()+1);

    console.log(typeof object.cash)


    console.log(todayDate);
    console.log(dateObject);

    if(object.nameClient.length <= 4) {
      setErrorMessage("Nombre demasiado corto");
      return false;
    }
    else if(object.date === "") {
      setErrorMessage("Ingrese una fecha correcta");
      return false;
    }
    else if(dateObject < todayDate) {
      setErrorMessage("La fecha es anterior al día de hoy");
      return false;
    }
    else if(object.time === "") {
      setErrorMessage("Ingrese una hora correcta");
      return false;
    }
    else if(!isOnlyNumber(object.cash)) {
      setErrorMessage("Debes ingresar un importe correcto");
      return false;
    }
    else {
      return true;
    }

  }

  const submitReserve = (e:any) => {
    e.preventDefault();
    setErrorMessage("");
    const validation = validationFormReservation(formReservation);
    console.log(validation)


  }

  const handleChangeForm = ({ target }:any ) => {
    const {name, value}:Target = target;

    setFormReservation({
      ...formReservation,
      [name]: value,
    })
  }


    

  return {
    formReservation,
    handleChangeForm,
    submitReserve,
    errorMessage
  }
}