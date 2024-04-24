import "../styles/CardStadium.css";
import imgStadium from "../assets/courts/stadium.jpg"
import { Button } from "./Button";

type Props = {
  id: number
}

export const CardStadium = ({ id }:Props) => {
  return (
    <>
      <div className="container-stadium"> 
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={imgStadium} />
                    <h3>Cancha {id}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>
                      Cancha de 5 con cesped sintético y caucho
                    </p>
                    <div className="box-btns">
                      <div className="btn">
                        <Button name={"Reservar"} />
                      </div>
                      <div className="btn">
                        <Button name={"Consultar"} />
                      </div>


                    </div>
                </div>
            </div>
        </div>          
      </div>
    </>

  )
}