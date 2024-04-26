import "../styles/FormReservation.css";
import { Button } from "./Button";


export const FormReservation = () => {
  return (
    <>
      <form className="box-form" action="">
        <div className="group-input">
          <div className="box-input">
            <span>Cliente:</span>
            <input type="text" />
          </div>
          <div className="box-input">
            <span>Fecha:</span>
            <input type="date" />
          </div>
        </div>
        <div className="group-input">
          <div className="box-input">
            <span>Hora:</span>
            <input type="time" />
          </div>
          <div className="box-input">
            <span>Seña $:</span>
            <input type="number" />
          </div>
        </div>  
        <div className="box-btn">
          <Button 
            name={"Reservar"}
            handleFunction={()=>{}}
          />
        </div>
      </form>
    </>
  )
}