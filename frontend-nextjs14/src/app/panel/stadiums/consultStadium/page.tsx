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

  const { handleOnChangeDate, listReserves, stateAllStadiums, selectAllStadiums, selectDate, dateSelected, handleSetEditRow, editRow  } = useConsultStadium();

  const initialState = {
    idStadium: 0,
    idUser: 0,
    name: "",
    typeFloor:"",
    description: "",
    typeStadium: 0,
    numberStadium: 0
  }
  const [ listStadiums, setListStadiums] = useState(initialState);

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

        dispatch(setStateSpinner());
        const response = await fetch("http://localhost:3001/panel/stadiums/consultStadium/api/");
        const newListStadiums = await response.json();
        dispatch(unsetStateSpinner()); 
        setListStadiums(newListStadiums); 
        console.log(newListStadiums)
        //SETEARLOS EN BACKEND PARA QUE NO LLEGUEN VACIOS los aprametros

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
              {
                (stateAllStadiums.allStadiums)  //Revisar datos que se setean!
                  ? (
                    <>
                      {
                        // listStadiums.map(
                        //   (stadium:any, index) => (
                        //     <CardStadium
                        //       key={index}
                        //       idStadium= {stadium.id}
                        //       description={stadium.description}
                        //       numberStadium={index+1}
                        //       reservation= {false}
                        //       idUser={stadium.idUser}
                        //       name={stadium.name}
                        //       typeStadium={stadium.typeStadium} 
                        //     />
                        //   )
                        // )
                      }
                    </>
    
                  )
                  : (
                      <CardStadium
                        reservation={true}
                        idStadium={listStadiums.idStadium} 
                        idUser={listStadiums.idUser} 
                        name={listStadiums.name} 
                        description={listStadiums.description} 
                        numberStadium={listStadiums.numberStadium} 
                        typeStadium={listStadiums.typeStadium}
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
              {             //ACA VA LA LISTA O TABLA
                            //   <List
                            //   rows = {listReserves}
                            //   handleChangeSubSection = {handleSetSubSection}
                            //   handleSetEditRow = {handleSetEditRow}
                            // />
              }
              <TableConsult></TableConsult>

              <div className="box-btn"> 
                <Button 
                  name={"Volver"}
                  handleFunction={() => {
                    // dispatch(setIdStadium(0))
                    resetAllParameters();
                    // navigate("/Stadiums")
                  } } 
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