"use client";
import { MouseEvent } from "react";
import { useFormReservation } from "@/hooks/useFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";
import { PropertiesLogin } from "../types/TypesLogin";

type Props = {
  idStadium: number
}

export const FormReservation = ({ idStadium }:Props) => {
 

  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties)
  const { formReservation, handleChangeForm, submitReserve, handleOnFocus, returnPage, errorMessage } = useFormReservation();


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
                <span>Email:</span>
                <input type="text" name="email" value={formReservation.email} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
              <div className="box-input">
                <span>Seña $:</span>
                <input type="number" name="cash" value={formReservation.cash} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <h3 className={`message-login ${errorMessage.color}`}>{errorMessage.message}</h3>
            <div className="box-btn"> 
              <Button 
                name={"Volver"}
                handleFunction={(e: any) => {
                  returnPage(e);
                } }
                moving={false} 
                nameEffect={""}              
              />
              <Button 
                name={"Reservar"}
                handleFunction={(e: MouseEvent<HTMLButtonElement, MouseEvent>)=>{submitReserve(e, idStadium)}}
                moving={false}
                nameEffect={""}
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