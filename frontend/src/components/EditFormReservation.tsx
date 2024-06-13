import { MouseEvent } from "react";
import { useFormReservation } from "../hooks/useFormReservation";
import "../styles/FormReservation.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";
import { PropertiesLogin } from "../types/TypesLogin";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { useDispatch } from "react-redux";

type Props = {
  row: {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number
  }
}

export const EditFormReservation = ({ row }:Props) => {

  console.log(row)
  const { handleChangeForm, submitReserve, errorMessage, handleOnFocus } = useFormReservation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);

  return (
    <> 
      { 
          <form className="box-form" action="">
            <div className="group-input">
              <div className="box-input">
                <span>Cliente:</span>
                <input type="text" name="nameClient" value={row.nameClient} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
              <div className="box-input">
                <span>Telefono:</span>
                <input type="string" name="phone" value={row.phone} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <div className="group-input">
              <div className="box-input">
                <span>Fecha:</span>
                <input type="date" name="date" value={row.date} onChange={handleChangeForm} onFocus={handleOnFocus} /> 
              </div>
              <div className="box-input">
                <span>Hora:</span>
                <input type="time" name="time" value={row.time} onChange={handleChangeForm} onFocus={handleOnFocus} />
              </div>
            </div>
            <div className="group-input">
              <div className="box-input">
                <span>Seña $:</span>
                <input type="number" name="cash" value={row.cash} onChange={handleChangeForm} onFocus={handleOnFocus} />
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
                name={"Actualziar"}
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