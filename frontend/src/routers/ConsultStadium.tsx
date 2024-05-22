import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";
import { useSelector } from "react-redux";
import { ReservationStadiumSlice } from "../types/TypesReducers";
import { PropertiesHome } from "../types/TypesHome";
import "../styles/ConsultStadium.css";
import { Navbar } from "../components/Navbar";
import { CardStadium } from "../components/CardStadium";
import { List } from "../components/List";
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
          <List
            rows = {[{
              id: 1,
              idStadium: 1,
              nameClient: "Carlos",
              phone: "12341234",
              date: "12-12-2024",
              time: "15:00",
              cash: 20000


            }]}
          />
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