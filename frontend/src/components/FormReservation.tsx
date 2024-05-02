import { MouseEvent } from "react";
import { useFormReservation } from "../hooks/useFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";



export const FormReservation = () => {

  const { formReservation, handleChangeForm, submitReserve} = useFormReservation();
  return (
    <>
      <form className="box-form" action="">
        <div className="group-input">
          <div className="box-input">
            <span>Cliente:</span>
            <input type="text" name="nameClient" value={formReservation.nameClient} onChange={handleChangeForm}/>
          </div>
          <div className="box-input">
            <span>Fecha:</span>
            <input type="date" name="date" value={formReservation.date} onChange={handleChangeForm}/> 
          </div>
        </div>
        <div className="group-input">
          <div className="box-input">
            <span>Hora:</span>
            <input type="time" name="time" value={formReservation.time} onChange={handleChangeForm}/>
          </div>
          <div className="box-input">
            <span>Seña $:</span>
            <input type="number" name="cash" value={formReservation.cash} onChange={handleChangeForm}/>
          </div>
        </div>  
        <div className="box-btn">
          <Button 
            name={"Reservar"}
            handleFunction={(e: MouseEvent<HTMLButtonElement, MouseEvent>)=>{submitReserve(e)}}
          />
        </div>
      </form>
    </>
  )
}