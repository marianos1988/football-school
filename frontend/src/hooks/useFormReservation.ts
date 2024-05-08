import { useState } from 'react'
import { FormReservationInitial } from '../types/TypesFormReservation';
import { Target } from '../types/TypesReservationStadium';
import { useSelector } from 'react-redux';
import { ReservationStadiumSlice } from '../types/TypesReducers';




export const useFormReservation = () => {

  const initialState:FormReservationInitial = {
    idStadium: 0,
    nameClient: "",
    date: "",
    time: "",
    cash: 0,
  }

  const [formReservation, setFormReservation] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  // const { idStadium } = useSelector((state:ReservationStadiumSlice) => state.reservationStadium)

  // const validationFormReservation = (object:FormReservationInitial) => {
  //   switch(object)

  // }

  const submitReserve = (e:any) => {
    e.preventDefault();
    console.log(formReservation);
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