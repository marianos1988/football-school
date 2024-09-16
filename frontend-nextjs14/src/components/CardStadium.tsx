"use client";
import "@/styles/CardStadium.css";
import imgStadium from "../../public/courts/stadium.jpg";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCardStadium } from "@/hooks/useCardStadium";

type Props = {
  id: number,
  reservation: boolean,
  idUser: number,
  name: string,
  description: string,
  numberStadium: number,
  typeStadium: number
}

export const CardStadium = ({ id, reservation, idUser, name, typeStadium,numberStadium, description }:Props) => {


  const { handleReservationStadium } = useCardStadium();
  const router = useRouter();
  const dataReservationStadium = {
    id: id,
    idUser: idUser,
    numberStadium: numberStadium,
    name: name
  }

  
  return (
    <>
      {
        (reservation) 
          ? (
              <div className="container-stadium-r"> 
                    <div className="face-r face1-r">
                        <div className="content-r">
                            <Image src={imgStadium} alt="Stadium" height={200} />
                            <h3>{`N° ${numberStadium} ${name}`}</h3>
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
                                  handleReservationStadium(dataReservationStadium);

                                }} 
                              />
                            </div>
                            <div className="btn">
                              <Button 
                                name={"Consultar"}
                                handleFunction={()=>{
                                  
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