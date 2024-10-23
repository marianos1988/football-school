import { useState } from 'react'
import { FormReservationInitial } from '@/types/TypesFormReservation';
import { Target } from '@/types/TypesReservationStadium';
import { useUtils } from './useUtils';
import { useDispatch } from 'react-redux';
import { setStateSpinner, unsetStateSpinner } from "@/reducers/properties/PropertiesSlice";
import { useRouter } from 'next/navigation';




export const useFormReservation = () => {

  const route = useRouter();
  const dispatch = useDispatch();



  const initialState:FormReservationInitial = {
    idStadium: 0,
    nameClient: "",
    phone: "",
    date: "",
    time: "",
    email: "",
    cash: 0,
  }


  const { useFetch } = useUtils();
  const [formReservation, setFormReservation] = useState(initialState);
  

  const [errorMessage, setErrorMessage] = useState({
    message: "",
    color: ""
  });


 


  const submitReserve = async (e:any, idStadium: number) => {
    e.preventDefault();
    setErrorMessage({message:"",color:""}); 
    setFormReservation({...formReservation, idStadium:idStadium})

      dispatch(setStateSpinner());
      const getData = await useFetch("http://localhost:3001/panel/stadiums/reservationStadium/reserve/api/",formReservation);
      dispatch(unsetStateSpinner());
      setErrorMessage(getData);
      if(getData.color === "green") { 
        setFormReservation({
          idStadium: 0,
          nameClient: "",
          phone: "",
          date: "",
          time: "",
          email: "",
          cash: 0,
        });
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

  const returnPage = (e: { preventDefault: () => void; })=> {
    e.preventDefault();
    route.back();
  }


  return {
    formReservation,
    handleChangeForm,
    submitReserve,
    errorMessage,
    handleOnFocus,
    returnPage


  }
}