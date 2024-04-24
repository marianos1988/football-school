import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar"
import "../styles/Courts.css"
import { PropertiesHome } from "../types/TypesHome";
import { CardStadium } from "../components/CardStadium";

export const Courts = () => {
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
const { section }= useSelector((state:PropertiesHome) =>  state.properties);
  return (
    <>
      <Navbar></Navbar>
      {
        (section === "courts") && (
          <div className={(blur) ? ("container-courts active-blur") : ("container-courts")}>
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