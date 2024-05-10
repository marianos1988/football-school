import "../styles/CardStadium.css";
import imgStadium from "../assets/courts/stadium.jpg"
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";

type Props = {
  id: number,
  reservation: boolean
}

export const CardStadium = ({ id,reservation }:Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {
        (reservation) 
          ? (

            <div className="container-stadium-r"> 
                  <div className="face-r face1-r">
                      <div className="content-r">
                          <img src={imgStadium} />
                          <h3>Cancha {id}</h3>
                      </div>
                  </div>         
            </div>
          )
          : (
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
                              <Button 
                                name={"Reservar"}
                                handleFunction={()=>{
                                  dispatch(setIdStadium(id));
                                  navigate("/Stadiums/Reserve")
                                }} 
                              />
                            </div>
                            <div className="btn">
                              <Button 
                                name={"Consultar"}
                                handleFunction={()=>{}}
                              />
                            </div>
                          </div>
                      </div>
                  </div>
              </div>          
            </div>
          )
      }

    </>

  )
}