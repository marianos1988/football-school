import { Navbar } from "../components/Navbar"
import "../styles/Home.css";


export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-home">
        <h1>Bienvenido Sistema de escuelas de futbol</h1>
      </div>
    </>
  )
}