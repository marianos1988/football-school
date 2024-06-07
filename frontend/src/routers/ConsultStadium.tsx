import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";
import { useSelector } from "react-redux";
import { PropertiesSlice, ReservationStadiumSlice } from "../types/TypesReducers";
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
import { TConsultStadium } from "../types/TypesConsultStadium";
import { ButtonUpdate } from "../components/ButtonUpdate";
import { Spinner } from "../components/Spinner";


export const ConsultStadium = () => {
  const { checkLogin, resetAllParameters } = useUtils();

  const { handleOnChangeDate, listReserves, selectAllStadiums, selectDate  } = useConsultStadium();
  const { stateSpinner } = useSelector((state:PropertiesSlice) => state.properties);
  const { dateSelected, allStadium } = useSelector((state:TConsultStadium) => state.consultStadium)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    ()=>{
      checkLogin();
    });

  const dataStadium = useSelector((state:ReservationStadiumSlice) => state);
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);


  return (
    <>

      <div className={(blur) ? ("container-consult-stadium active-blur") : ("container-consult-stadium")}>
        <h1>Consultar Reservas</h1>
        <div className="box-consult">
          {
            (allStadium) 
              ? (
                <>
                  <div className="box-cards-stadiums">
                    <CardStadium
                      reservation={true}
                      id={1}
                    />
                    <CardStadium
                      reservation={true}
                      id={2}
                    />
                    <CardStadium
                      reservation={true}
                      id={3}
                    />
                  </div>
                </>

              )
              : (
                  <CardStadium
                    reservation={true}
                    id={dataStadium.idStadium}
                  /> 
              )
          }
         
          <div className="box-input-checkbox">
            <span>Selecionar todas las canchas</span>
            <Switch 
              stateSwitch={selectAllStadiums}
            />
          </div> 
          <div className="box-input-date">
              <span>Fecha:</span>
              <input type="date" name="date" value={dateSelected} onChange={(e)=>handleOnChangeDate(e.target.value)}/>
              <ButtonUpdate
                handleOnClick={selectDate}
              />
          </div>
          <Spinner
            active={stateSpinner}
            section={"consultStadium"}
          />
          <List
            rows = {listReserves}
          />
          <div className="box-btn"> 
              <Button 
                name={"Volver"}
                handleFunction={()=>{
                  dispatch(setIdStadium(0))
                  resetAllParameters();
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