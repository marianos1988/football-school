import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";
import { useSelector } from "react-redux";
import { ReservationStadiumSlice } from "../types/TypesReducers";
import { PropertiesHome } from "../types/TypesHome";
import "../styles/ConsultStadium.css";
import { Navbar } from "../components/Navbar";
import { CardStadium } from "../components/CardStadium";
import List from "../components/List";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";



export const ConsultStadium = () => {

  const navigate = useNavigate();
  const { checkLogin } = useUtils();
  useEffect(()=>{checkLogin()});

  const dataStadium = useSelector((state:ReservationStadiumSlice) => state.reservationStadium);
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  return (
    <>
      <Navbar></Navbar>
      <div className={(blur) ? ("container-consult-stadium active-blur") : ("container-consult-stadium")}>
        <h1>Consultar Reservas</h1>
        <div className="box-consult">
          <CardStadium
            reservation={true}
            id={dataStadium.idStadium}
          />
          <div className="box-list-reserves">
            <List></List>
          </div>

          <div className="box-btn"> 
              <Button 
                name={"Volver"}
                handleFunction={()=>{navigate("/Stadiums")}} 
              />

            </div>

        </div>
      </div>
    </>
 
  )
}