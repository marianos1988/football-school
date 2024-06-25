import { useSelector } from "react-redux";
import "../styles/Stadiums.css"
import { PropertiesHome } from "../types/TypesHome";
import { CardStadium } from "../components/CardStadium";
import { useEffect } from "react";
import { useUtils } from "../hooks/useUtils";

export const Stadiums = () => {

  const { checkLogin } = useUtils();

  useEffect(()=>{checkLogin()});
  
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
  const { section }= useSelector((state:PropertiesHome) =>  state.properties);
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
            </div> 
          </div>
        )
      }
    </>

  )
}