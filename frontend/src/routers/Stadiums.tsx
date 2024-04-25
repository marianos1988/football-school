import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar"
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
      <Navbar></Navbar>
      {
        (section === "stadiums") && (
          <div className={(blur) ? ("container-stadiums active-blur") : ("container-stadiums")}>
            <h1>Mis Canchas</h1>
            <div className="list-stadiums"> 
              <CardStadium
                id={1}
              />
              <CardStadium 
                id={2}
              />
              <CardStadium 
                id={3}
              />
            </div> 
          </div>
        )
      }

    </>

  )
}