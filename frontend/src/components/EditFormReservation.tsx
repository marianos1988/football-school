import { useEffect, useState } from "react";
import { useEditFormReservation } from "../hooks/useEditFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { PropertiesLogin } from "../types/TypesLogin";
import { FormReservationEdit } from "../types/TypesFormReservation";
import { activePosterConfirmation } from "../reducers/properties/PropertiesSlice";
import { PosterConfirmation } from "./PosterConfirmation";
import { PropertiesHome } from "../types/TypesHome";



type Props = {
  rowToEdit: FormReservationEdit, 
  handleSetSubSection: (subSection:string) => void
}

export const EditFormReservation = ({ rowToEdit = {
  idStadium: 0,
  id: 0,
  nameClient: "",
  phone: "",
  date: "",
  time: "",
  cash: 0
}, handleSetSubSection }:Props) => {


  const { handleChangeForm, submitReserve, errorMessage, handleOnFocus, startToEditFormReservation, formReservation } = useEditFormReservation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);
  const { stateConfirmationPoster} = useSelector((state:PropertiesHome) => state.properties)


  useEffect(()=>{
    startToEditFormReservation(rowToEdit)
  },[rowToEdit])



  return (
    <>    
          <form className="box-form" action="">
            <div className={(stateConfirmationPoster) ? ("post-active") : ("")}>
              <PosterConfirmation 
                message='¿Guardar los cambios?'
                action={()=>{}}
              />
            </div>
            <div className="group-input">
              <div className="box-input">
                <span>Cliente:</span>
                <input type="text" name="nameClient" value={formReservation.nameClient} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
              <div className="box-input">
                <span>Telefono:</span>
                <input type="string" name="phone" value={formReservation.phone} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <div className="group-input">
              <div className="box-input">
                <span>Fecha:</span>
                <input type="date" name="date" value={formReservation.date} onChange={handleChangeForm} onFocus={handleOnFocus} /> 
              </div>
              <div className="box-input">
                <span>Hora:</span>
                <input type="time" name="time" value={formReservation.time} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <div className="group-input">
              <div className="box-input">
                <span>Seña $:</span>
                <input type="number" name="cash" value={formReservation.cash} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <h3 className={`message-login ${errorMessage.color}`}>{errorMessage.message}</h3>
            <div className="box-btn"> 
              <Button 
                name={"Cancelar"}
                handleFunction={()=>{

                  handleSetSubSection("consultStadium")
                }} 
              />
              <Button 
                name={"Actualizar"}
                handleFunction={
                  // dispatch(activePosterConfirmation())
""
                }
              />
            </div>
            <Spinner 
              active={stateSpinner}
              section="reservation"
            />
          </form>


    </>
  )
}