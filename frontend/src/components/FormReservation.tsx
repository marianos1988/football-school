import { MouseEvent } from "react";
import { useFormReservation } from "../hooks/useFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";





export const FormReservation = () => {

  const navigate = useNavigate();
  const { formReservation, handleChangeForm, submitReserve, errorMessage, handleOnFocus } = useFormReservation();

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
                handleFunction={()=>{navigate("/Stadiums")}} 
              />
              <Button 
                name={"Reservar"}
                handleFunction={(e: MouseEvent<HTMLButtonElement, MouseEvent>)=>{submitReserve(e)}}
              />
            </div>
          </form>
      }

    </>
  )
}