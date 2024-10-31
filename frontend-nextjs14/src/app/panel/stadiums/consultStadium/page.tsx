"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUtils } from "@/hooks/useUtils";
import { useSelector } from "react-redux";
import { setStateSpinner, unsetStateSpinner } from "@/reducers/properties/PropertiesSlice";
import { PropertiesSlice } from "@/types/TypesReducers";
import { PropertiesHome } from "@/types/TypesHome";
import "@/styles/ConsultStadium.css";
import { CardStadium } from "@/components/CardStadium";
import { activeError, inactiveError } from "@/reducers/errorsSlice/ErrorsSlices";
// import { List } from "../components/List";
import { Button } from "@/components/Button"; 
import { useConsultStadium } from "@/hooks/useConsultStadium";
import { useDispatch } from "react-redux";
// import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { Switch } from "@/components/Switch"; 
import { TConsultStadium } from "@/types/TypesConsultStadium";
// import { EditFormReservation } from "../components/EditFormReservation";

import { Spinner } from "@/components/Spinner"; 
import { ErrorStore } from "@/types/TypesLogin";
import { TableConsult } from "@/components/TableConsult";
// import { useNavigate } from "react-router-dom";


export default function ConsultStadium() {
  const { checkLogin, resetAllParameters } = useUtils();
  const route = useRouter();

  const { handleOnChangeDate,handleSetDateSelected, stadium, handleSetStadium, allStadiums, handleAllSetStadiums, listReserves, handleSetListReserves, stateAllStadiums, selectAllStadiums, selectDate, dateToday, handleSetEditRow, editRow, returnPage  } = useConsultStadium();
 

  const { isActive, message } = useSelector((state:ErrorStore) => state.error);
  const { stateSpinner }  = useSelector((state:PropertiesSlice) => state.properties);
  // const { dateSelected, allStadium } = useSelector((state:TConsultStadium) => state.consultStadium)

  const dispatch = useDispatch(); 
  // const navigate = useNavigate();

  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) { 
      route.push("/auth/login");
    } else { 

      try {
        dispatch(inactiveError());
        dispatch(setStateSpinner());
        const response = await fetch("http://localhost:3001/panel/stadiums/consultStadium/api/"); 
        const newListStadiums = await response.json();

        if(newListStadiums.isThereError){
          
          dispatch(activeError(newListStadiums.message))
        } 


        handleSetStadium(newListStadiums.stadium);   
        handleAllSetStadiums(newListStadiums.allStadium);
        handleSetListReserves(newListStadiums.listReserves);

        dispatch(unsetStateSpinner()); 

      } catch (error) {

        console.log(error) 
      }
    } 
  }
  useEffect(()=>{
    checkLoginPage(); 
  },[]); 
 
  // const { idStadium } = useSelector((state:{reservationStadium: {idStadium: number}}) => state.reservationStadium);
  // const dataStadium = useSelector((state:{reservationStadium: { idStadium: number}}) => state.reservationStadium);
  // const { blur }= useSelector((state:PropertiesHome) =>  state.properties);

  return (
    <>
      {
          <div className="container-consult-stadium">
            <h1>Consultar Reservas</h1>
            <div className="box-consult">
              <div className="box-images-stadiums">
                {
                  (stateAllStadiums) 
                    ? (
                      <>
                        {
                          allStadiums.map(
                            (stadium:any, index) => (
                              <CardStadium
                                key={index}
                                idStadium= {stadium.idStadium}
                                description={stadium.description}
                                numberStadium={index+1}
                                reservation= {true}
                                idUser={stadium.idUser}
                                name={stadium.name}
                                typeStadium={stadium.typeStadium}
                                modeAllStadium={true} 
                              />
                            )
                          )
                        }
                      </>
       
                    )
                    : (
                        <CardStadium
                          reservation={true}
                          idStadium={stadium.idStadium} 
                          idUser={stadium.idUser} 
                          name={stadium.name} 
                          description={stadium.description} 
                          numberStadium={stadium.numberStadium} 
                          typeStadium={stadium.typeStadium}
                          modeAllStadium={false}
                        /> 
                    )
                }
              </div>

            
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
                    <input type="date" name="date" value={dateToday} onChange={(e)=>handleOnChangeDate(e.target.value)}/>
                  </div>
                </div>
                <div className="box-btn-search">
                  <Button
                    name="Buscar"
                    handleFunction={()=>{selectDate()}}
                    moving={false} 
                    nameEffect={""}
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

              <TableConsult 
                listReserve={listReserves}
              />

              <div className="box-btn"> 
                <Button 
                  name={"Volver"}
                  handleFunction={returnPage} 
                  moving={false} 
                  nameEffect={""}
                />
              </div>
            </div>
          </div>
      }
      {/* { ACA VA TODO EL EDITAR RESERVA

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

      } */}

    </>
 
  )
}