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


    if(object.nameClient.length < 4) {
      setErrorMessage({message:"Nombre demasiado corto",color:"red"});
      return false;
    }
    else if(!isOnlyNumber(object.phone)) {
      setErrorMessage({message:"Debes ingresar un telefono correcto",color:"red"});
      return false;
    }
    else if(object.phone.length < 8) {
      setErrorMessage({message:"Telefono demasiado corto",color:"red"});
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

      dispatch(setStateSpinner());
      const getData = await useFetch("http://localhost:3000/Stadiums/Reserve",formReservation);
      dispatch(unsetStateSpinner());


      
      if(getData === "Datos invalidos") {
        setErrorMessage({message: getData, color:"red"})
      } else {
        setErrorMessage({message: getData.message, color: getData.color});
        setFormReservation({
          idStadium: 0,
          nameClient: "",
          phone: "",
          date: "",
          time: "",
          cash: 0,
        })
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