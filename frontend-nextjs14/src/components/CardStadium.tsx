"use client";
import "@/styles/CardStadium.css";
import imgStadium from "../../public/courts/stadium.jpg";
import { Button } from "./Button";
import Image from "next/image";
import { useCardStadium } from "@/hooks/useCardStadium";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";
import { PropertiesLogin } from "@/types/TypesLogin";


type Props = {
  idStadium: number,
  reservation: boolean,
  idUser: number,
  name: string,
  description: string,
  numberStadium: number,
  typeStadium: number
} 

export const CardStadium = ({ idStadium, reservation, idUser, name ,numberStadium, description }:Props) => {
  
  const { stateSpinner2 } = useSelector((state:PropertiesLogin) => state.properties)

  
  const { handleReservationStadium } = useCardStadium();

  const parametersStadium:any = {
    idStadium: idStadium,
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

                                  handleReservationStadium(parametersStadium);

                                }}
                                moving={stateSpinner2}
                                nameEffect={"stadium-moving"} 
                              />
                              <Spinner active={stateSpinner2} section={"btn-reserve"} />
                            </div>
                            <div className="btn">
                              <Button 
                                name={"Consultar"}
                                handleFunction={()=>{
                                  
                                }}
                                moving={stateSpinner2}
                                nameEffect={"stadium-moving"} 
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