"use client"
import "../styles/Navbar.css";
import Image from "next/image";
import icoHome from "../../public/navbar/ico-home.png";
import icoArch from "../../public/navbar/icon-arch.png";
import icoClients from "../../public/navbar/ico-clients.png";
import icoMoney from "../../public/navbar/ico-money.png";
import icoReport from "../../public/navbar/ico-formulario.png";
import icoSettings from "../../public/navbar/icon-ajustes.png";
import icoShutDown from "../../public/navbar/icon-shutdown.png";
import logoSys from "../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectSection, unsetBlur, unsetBurguer, unsetNavLayer } from "../reducers/properties/PropertiesSlice";
import { unsetLogin } from "../reducers/userLogin/UserLoginSlice"
import { ButtonBurguer } from "./ButtonBurguer";
// import { useNavigate } from "react-router-dom";
import { PropertiesHome } from "@/types/TypesHome";
import { useUtils } from "@/hooks/useUtils";





export const Navbar = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate(); 
  const {navLayer} = useSelector((state:PropertiesHome) => state.properties)
  const { resetAllParameters } = useUtils();


  return (
    <>
      <div className="flex-nav">
        <nav className="sidebar">
          <div className="sidebar-inner">
            <header className="sidebar-header">
              <ButtonBurguer />
              <Image src={logoSys} alt="Logo" className="sidebar-logo"></Image>
            </header>
            <nav className="sidebar-menu">
              <button type="button" onClick= {()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }
                dispatch(selectSection("home"));
                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetNavLayer());
                resetAllParameters();
                // navigate("/Home"); 
                }
              }>

                <Image src={icoHome} alt="Home" />
                <span>Inicio</span>
              </button>
              <button type="button" className="has-border" onClick= { ()=>{
                
                  if(document.body.classList.contains("open")) {
                    document.body.classList.toggle("open");
                  }
                  dispatch(selectSection("stadiums"));
                  dispatch(unsetBlur()); 
                  dispatch(unsetBurguer());
                  dispatch(unsetNavLayer());
                  resetAllParameters();
                  // navigate("/Stadiums");
                  }
              }>

                <Image src={icoArch} alt="Canchas" />
                <span>Canchas</span>
              </button>
              <button type="button" onClick= { ()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }
                dispatch(selectSection("clients"));
                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetNavLayer());
                resetAllParameters();
                }
              }> 
                {/* <img src={icoClients} /> */}
                <Image src={icoClients} alt="Clientes" />
                <span>Clientes</span>
              </button>
              <button type="button" onClick= { ()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }
                dispatch(selectSection("cash"));
                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetNavLayer());
                resetAllParameters();
                }
              }>

                <Image src={icoMoney} alt="Caja"/>
                <span>Caja</span>
              </button>
              <button type="button" className="has-border" onClick= { ()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }
                dispatch(selectSection("reports"));
                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetNavLayer());
                resetAllParameters();
                }
              }>
                {/* <img src={icoReport} /> */}
                <Image src={icoReport} alt="reportes" />
                <span>Reportes</span>
              </button>
              <button type="button" onClick= { ()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }
                dispatch(selectSection("settings"));
                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetNavLayer());
                resetAllParameters();
                }
              }>
                {/* <img src={icoSettings} /> */}
                <Image src={icoSettings} alt="Ajustes"></Image>
                <span>Ajustes</span>
              </button>

              <button className="btn-shutdown" type="button" onClick= { ()=>{
                
                if(document.body.classList.contains("open")) {
                  document.body.classList.toggle("open");
                }

                dispatch(unsetBlur()); 
                dispatch(unsetBurguer());
                dispatch(unsetLogin());
                dispatch(unsetNavLayer());
                resetAllParameters();
                // navigate("/panel");
                }
              }>
                  {/* <img src={icoShutDown} /> */}
                  <Image src={icoShutDown} alt="Cerrar Sesion" />
                  <span>Cerrar sesion</span>
                </button>
              </nav>
          </div>
        </nav>
        <div className={(navLayer) ? ("nav-layer") : ("")}></div>
      </div>
    </>

  ) 
}