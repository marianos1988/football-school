"use client";
import "@/styles/CardStadium.css";
import imgStadium from "../../public/courts/stadium.jpg";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setIdStadium } from "../reducers/reservationStadium/ReservationStadiumSlice";
import { useUtils } from "../hooks/useUtils";
import Image from "next/image";

type Props = {
  id: number,
  reservation: boolean,
  id_user: number,
  name: string,
  description: string,
  numberStadium: number,
  typeStadium: number
}

export const CardStadium = ({ id, reservation, id_user, name, typeStadium,numberStadium, description }:Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  return (
    <>
      {
        (reservation) 
          ? (
              <div className="container-stadium-r"> 
                    <div className="face-r face1-r">
                        <div className="content-r">
                            <Image src={imgStadium} alt="Stadium" height={200} />
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
                          <Image src={imgStadium} alt="Stadium" />
                          <h3>{`N° ${numberStadium} ${name}`}</h3>
                      </div>
                  </div>
                  <div className="face face2"> 
                      <div className="content">
                          <p>
                            {description}
                          </p>
                          <div className="box-btns">
                            <div className="btn">
                              <Button 
                                name={"Reservar"}
                                handleFunction={()=>{
                                  dispatch(setIdStadium(id));
                                  router.push("/panel/stadiums/reservationStadium");
                                }} 
                              />
                            </div>
                            <div className="btn">
                              <Button 
                                name={"Consultar"}
                                handleFunction={()=>{
                                  dispatch(setIdStadium(id));
                                  // navigate("/Stadiums/Consult")
                                }}
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