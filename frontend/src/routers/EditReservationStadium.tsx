import { useSelector } from "react-redux";
import "../styles/EditReservationStadium.css";
import { useUtils } from "../hooks/useUtils";
import { useEffect } from "react";
import { PropertiesHome } from "../types/TypesHome";
import { EditFormReservation } from "../components/EditFormReservation";
import { CardStadium } from "../components/CardStadium";


export const EditReservationStadium = () => {

const { checkLogin } = useUtils();
useEffect(()=>{checkLogin()});


const dataStadium = useSelector((state:{reservationStadium: { idStadium: number}}) => state.reservationStadium);
const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  return ( 
    <>

      <div className={(blur) ? ("container-edit-reservation-stadium active-blur") : ("container-reservation-stadium")}>
        <h1>Editar Reserva</h1>
        <div className="box-form">
          <CardStadium
            id={dataStadium.idStadium}
            reservation={true}
          />
          <EditFormReservation /> 
        </div> 
      </div>

    </>
  )
}