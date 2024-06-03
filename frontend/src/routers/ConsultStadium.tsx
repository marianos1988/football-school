import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";
import { useSelector } from "react-redux";
import { ReservationStadiumSlice } from "../types/TypesReducers";
import { PropertiesHome } from "../types/TypesHome";
import "../styles/ConsultStadium.css";
import { CardStadium } from "../components/CardStadium";
import { List } from "../components/List";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom"; 
import { useConsultStadium } from "../hooks/useConsultStadium";
import { useDispatch } from "react-redux";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { Switch } from "../components/Switch";
import { ConsultStadium } from "../types/TypesConsultStadium";




export const ConsultStadium = () => {

  const { dateSelected, handleOnChangeDate, listReserves, selectAllStadiums  } = useConsultStadium();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkLogin } = useUtils();
  useEffect(
    ()=>{
      checkLogin();

    });

  const dataStadium = useSelector((state:ReservationStadiumSlice) => state.reservationStadium);
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
  const { cantStadium, allStadium } = useSelector((state:ConsultStadium) => state.consultStadium)

  return (
    <>

      <div className={(blur) ? ("container-consult-stadium active-blur") : ("container-consult-stadium")}>
        <h1>Consultar Reservas</h1>
        <div className="box-consult">

          <CardStadium
            reservation={true}
            id={dataStadium.idStadium}
          />          
          <div className="box-input-checkbox">
            <span>Selecionar todas las canchas</span>
            <Switch 
              stateSwitch={selectAllStadiums}
            />
          </div> 
          <div className="box-input-date">
              <span>Fecha:</span>
              <input type="date" name="date" value={dateSelected} onChange={(e)=>handleOnChangeDate(e.target.value)}/> 
          </div>

          <List
            rows = {listReserves}
          />
          <div className="box-btn"> 
              <Button 
                name={"Volver"}
                handleFunction={()=>{
                  dispatch(setIdStadium(0))
                  navigate("/Stadiums")
                }
                } 
              />
          </div>
        </div>
      </div>
    </>
 
  )
}