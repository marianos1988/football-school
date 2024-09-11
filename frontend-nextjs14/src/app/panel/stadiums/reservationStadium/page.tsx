"use client";
import "@/styles/ReservationStadium.css";
import { useUtils } from "@/hooks/useUtils";
import { useEffect } from "react";
import { PropertiesHome } from "@/types/TypesHome";
import { FormReservation } from "@/components/FormReservation";
import { CardStadium } from "@/components/CardStadium";
import { useRouter } from "next/navigation";


export default function ReservationStadium() {
  const { checkLogin } = useUtils();
  const route = useRouter();

  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    } else {

      try {
        //Traer id de la cancha
        const response = await fetch("http://localhost:3001/panel/stadiums/api/");
        const newListStadiums = await response.json();

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
            id={1}
            reservation={true} id_user={0} name={""} description={""} numberStadium={0} typeStadium={0}
          />
          <FormReservation /> 
        </div> 
      </div>
    </>
  )
}

