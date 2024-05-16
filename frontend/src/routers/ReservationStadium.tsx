import { useSelector } from "react-redux"
import { Navbar } from "../components/Navbar";
import "../styles/ReservationStadium.css";
import { useUtils } from "../hooks/useUtils";
import { useEffect } from "react";
import { PropertiesHome } from "../types/TypesHome";
import { FormReservation } from "../components/FormReservation";
import { CardStadium } from "../components/CardStadium";
import { ReservationStadiumSlice } from "../types/TypesReducers";




export const ReservationStadium = () => {
const { checkLogin } = useUtils();
useEffect(()=>{checkLogin()});

const dataStadium = useSelector((state:ReservationStadiumSlice) => state.reservationStadium);
const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  return ( 
    <>
      <Navbar></Navbar>
      <div className={(blur) ? ("container-reservation-stadium active-blur") : ("container-reservation-stadium")}>
        <h1>Iniciar Reserva</h1>
        <div className="box-form">
          <CardStadium
            id={dataStadium.idStadium}
            reservation={true}
          />
          <FormReservation /> 
        </div> 
      </div>

    </>
  )
}