"use client";
import "@/styles/ReservationStadium.css";
import { useUtils } from "@/hooks/useUtils";
import { useEffect, useState } from "react";
import { FormReservation } from "@/components/FormReservation";
import { CardStadium } from "@/components/CardStadium";
import { useRouter } from "next/navigation";


export default function ReservationStadium() {

  const initialState = {
    idStadium: 0,
    idUser: 0,
    numberStadium: 0,
    name: ""
  }
  const { checkLogin } = useUtils();
  const route = useRouter();
  const [ parametersReservationStadium, setParametersReservationStadium ] = useState(initialState);



  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    } else {

      try {
        
        const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api/");
        const newParametersReservationStadium = await response.json();
        setParametersReservationStadium(newParametersReservationStadium);

      } catch (error) {

        console.log(error)
      }
    }
  }

  useEffect(()=>{
    checkLoginPage();
  },[]);

  return (
    <>
      <div className="container-reservation-stadium">
        <h1>Iniciar Reserva</h1>
        <div className="box-form">
          <CardStadium
            idStadium={parametersReservationStadium.idStadium}
            reservation={true} idUser={parametersReservationStadium.idUser} 
            name={parametersReservationStadium.name} 
            description={""} 
            numberStadium={parametersReservationStadium.numberStadium} 
            typeStadium={0}
          />
          <FormReservation />
        </div> 
      </div>
    </>
  )
}

