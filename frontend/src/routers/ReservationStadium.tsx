import { useSelector } from "react-redux";
import "../styles/ReservationStadium.css";
import { useUtils } from "../hooks/useUtils";
import { useEffect } from "react";
import { PropertiesHome } from "../types/TypesHome";
import { FormReservation } from "../components/FormReservation";
import { CardStadium } from "../components/CardStadium";


export const ReservationStadium = () => {
const { checkLogin } = useUtils();
useEffect(()=>{checkLogin()});

const { idStadium } = useSelector((state:{reservationStadium: {idStadium: number}}) => state.reservationStadium);
const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  return ( 
    <>

      <div className={(blur) ? ("container-reservation-stadium active-blur") : ("container-reservation-stadium")}>
        <h1>Iniciar Reserva</h1>
        <div className="box-form">
          <CardStadium
            id={idStadium}
            reservation={true}
          />
          <FormReservation /> 
        </div> 
      </div>

    </>
  )
}