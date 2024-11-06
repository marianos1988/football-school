"use client";
import "@/styles/EditReservationStadium.css";
import { CardStadium } from "@/components/CardStadium";
import { FormReservation } from "@/components/FormReservation";
import { useUtils } from "@/hooks/useUtils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  parametersStadium: {
    idStadium: number,
    idUser: number,
    name: string,
    numberStadium: number
  },
  parametersReserve: {
    idStadium: number,
    nameClient: string,
    phone: number,
    date: string,
    time: string,
    email: string,
    cash: number,
  }
}

export default function EditReserve({ parametersStadium, parametersReserve }:Props) {

  const checkLoginPage = async () =>{

    const initialState = {
      idStadium: 0,
      idUser: 0,
      numberStadium: 0,
      name: ""
    }
    const [ parametersEditStadium, setParametersEditStadium ] = useState(initialState);
    const { checkLogin, runErrorPoster } = useUtils();
    const route = useRouter();
    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    } else {

      try {
        
        const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api/");
        const newParametersReservationStadium = await response.json();

        if(newParametersReservationStadium.thereIsError) {
          runErrorPoster(newParametersReservationStadium.tittle, newParametersReservationStadium.subtittle);
        }
        else {

          setParametersEditStadium(newParametersReservationStadium);
        }

      } catch (error) {

        console.log(error)
      }
    }
  }

  useEffect(()=>{
    checkLoginPage();
  },[]); 

  return(
    <>
      <div className="container-edit-reservation-stadium">
        <h1>Editar Reserva</h1>
        <div className="box-form">
          <CardStadium
            idStadium={4}
            reservation={true}
            idUser={1}
            name={"sarasa"}
            description={""}
            numberStadium={2}
            typeStadium={0} 
            modeAllStadium={false}          
          />
          <FormReservation 
            idStadium={4}
            numberStadium={2}
          />
        </div> 
      </div>
    </>
  )
}