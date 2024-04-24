import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar"
import "../styles/Courts.css"
import { PropertiesHome } from "../types/TypesHome";

export const Courts = () => {
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
const { section }= useSelector((state:PropertiesHome) =>  state.properties);
  return (
    <>
      <Navbar></Navbar>
      {
        (section === "courts") && (
          <div className={(blur) ? ("container-courts active-blur") : ("container-courts")}>
            <h1>Canchas</h1>
          </div>
        )
      }

    </>

  )
}