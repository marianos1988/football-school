"use client"
import { useSelector } from "react-redux";
import "@/styles/Stadiums.css"
import { PropertiesHome } from "@/types/TypesHome";
import { CardStadium } from "@/components/CardStadium";
import { useEffect } from "react";
import { useUtils } from "@/hooks/useUtils";

export default function Stadiums() {

  const { checkLogin } = useUtils();

  useEffect(()=>{checkLogin()});
  
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
  const { section }= useSelector((state:PropertiesHome) =>  state.properties);

  // const canchas = [{id: 1, reservation: false}, {id: 2, reservation: false}, {id: 3, reservation: false}]
  return (
    <>
      {
        (section === "stadiums") && (
          <div className={(blur) ? ("container-stadiums active-blur") : ("container-stadiums")}>
            <h1>Mis Canchas</h1>
            <div className="list-stadiums"> 
              <CardStadium
                id={1}
                reservation={false}
              />
              <CardStadium 
                id={2}
                reservation={false}
              />
              <CardStadium 
                id={3}
                reservation={false}
              />
              <CardStadium 
                id={4}
                reservation={false}
              />
            </div> 
          </div>
        )
      }
    </>
  )
}