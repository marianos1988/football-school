import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";
import { useSelector } from "react-redux";
import { PropertiesSlice } from "../types/TypesReducers";
import { PropertiesHome } from "../types/TypesHome";
import "../styles/ConsultStadium.css";
import { CardStadium } from "../components/CardStadium";
import { List } from "../components/List";
import { Button } from "../components/Button";
import { useConsultStadium } from "../hooks/useConsultStadium";
import { useDispatch } from "react-redux";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { Switch } from "../components/Switch";
import { TConsultStadium } from "../types/TypesConsultStadium";
import { EditFormReservation } from "../components/EditFormReservation";

import { Spinner } from "../components/Spinner";
import { ErrorStore } from "../types/TypesLogin";
import { useNavigate } from "react-router-dom";


export const ConsultStadium = () => {
  const { checkLogin, resetAllParameters } = useUtils();

  const { handleOnChangeDate, listReserves, selectAllStadiums, selectDate, subSection, handleSetSubSection,handleSetEditRow, editRow  } = useConsultStadium();

  const { stateSpinner } = useSelector((state:PropertiesSlice) => state.properties);
  const { dateSelected, allStadium } = useSelector((state:TConsultStadium) => state.consultStadium)
  const { isActive, message } = useSelector((state:ErrorStore) => state.error);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( 
    ()=>{
      checkLogin();
    });

  const { idStadium } = useSelector((state:{reservationStadium: {idStadium: number}}) => state.reservationStadium);
  const dataStadium = useSelector((state:{reservationStadium: { idStadium: number}}) => state.reservationStadium);
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  

  return (
    <>
      {
        (subSection === "consultStadium") && (
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
                        id={idStadium}
                      /> 
                  )
              }
            
              <div className="box-input-checkbox">
                <span>Selecionar todas las canchas</span>
                <Switch 
                  stateSwitch={selectAllStadiums}
                />
              </div>
              <div className="group-date-btn">
                <div className="box-input-date">
                  <div>
                    <span>Fecha:</span>
                    <input type="date" name="date" value={dateSelected} onChange={(e)=>handleOnChangeDate(e.target.value)}/>
                  </div>
                </div>
                <div className="box-btn-search">
                  <Button
                      name="Buscar"
                      handleFunction={selectDate}
                    />
                </div>
              </div>
              <Spinner
                active={stateSpinner}
                section={"consultStadium"}
              />
              { 
    
                (isActive) && (<h3 className="message">{message}</h3>)
              }
              <List
                rows = {listReserves}
                handleChangeSubSection = {handleSetSubSection}
                handleSetEditRow = {handleSetEditRow}
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
        )
      }
      {
        (subSection === "editConsultStadium") && (
          //Crear un componente de esto
          <div className={(blur) ? ("container-edit-reservation-stadium active-blur") : ("container-reservation-stadium")}>
            <h1>Editar Reserva</h1>
            <div className="box-form">
              <CardStadium
                id={dataStadium.idStadium}
                reservation={true}
              />
              <EditFormReservation 
                rowToEdit = {editRow}
                handleSetSubSection = { handleSetSubSection }
              /> 
            </div> 
          </div>
        )
      }

    </>
 
  )
}