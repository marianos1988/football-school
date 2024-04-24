import { Navbar } from "../components/Navbar"
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { PropertiesHome } from "../types/TypesHome";

export const Home = () => {

const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
const { section }= useSelector((state:PropertiesHome) =>  state.properties);

  return (
    <>
      <Navbar></Navbar>
      {
        (section === "home") && (
          <div className={(blur) ? ("container-home active-blur") : ("container-home")}>
            <h1>Bienvenido Sistema de escuelas de futbol</h1>
          </div>
        )
      }

    </>
  )
}