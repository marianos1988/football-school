import { Navbar } from "../components/Navbar"
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { Properties } from "../types/TypesHome";
import { SubHome } from "./SubHome";
import { Courts } from "./Courts";
import { useNavigate } from "react-router-dom";



export const Home = () => {

const navigate = useNavigate();
const { blur }= useSelector((state:Properties) =>  state.properties);
const { section }= useSelector((state:Properties) =>  state.properties);

  return (
    <>
      <Navbar></Navbar>
      <div className={(blur) ? ("container-home active-blur") : ("container-home")}>
        
        {
          (section === "home") && (<SubHome />)

        }
        {
          (section === "courts") && (<Courts></Courts>)
        }
      </div>
    </>
  )
}