import { MouseEvent, useEffect } from "react";
import { useEditFormReservation } from "../hooks/useEditFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";
import { PropertiesLogin } from "../types/TypesLogin";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { useDispatch } from "react-redux";
import { FormReservationEdit } from "../types/TypesFormReservation";


type Props = {
  rowToEdit: FormReservationEdit
}

export const EditFormReservation = ({ rowToEdit = {
  idStadium: 0,
  id: 0,
  nameClient: "",
  phone: "",
  date: "",
  time: "",
  cash: 0
} }:Props) => {


  const { handleChangeForm, submitReserve, errorMessage, handleOnFocus, startToEditFormReservation, formReservation } = useEditFormReservation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);

  useEffect(()=>{


    startToEditFormReservation(rowToEdit)

    console.log(formReservation)
  },[rowToEdit])



  return (
    <> 
      { 
          <form className="box-form" action="">
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
                  dispatch(setIdStadium(0))
                  navigate("/Stadiums")
                }} 
              />
              <Button 
                name={"Actualizar"}
                handleFunction={(e: MouseEvent<HTMLButtonElement, MouseEvent>)=>{submitReserve(e)}}
              />
            </div>
            <Spinner 
              active={stateSpinner}
              section="reservation"
            />
          </form>
      }

    </>
  )
}