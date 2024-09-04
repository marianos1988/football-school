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
import { ButtonBurguer } from "./ButtonBurguer";
import { PropertiesHome } from "@/types/TypesHome";
import { useUtils } from "@/errors/useUtils";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";





export const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {navLayer} = useSelector((state:PropertiesHome) => state.properties)
  const { resetAllParameters } = useUtils();
  const { logout } = useLogin()


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
                router.push("/panel/home");
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
                  router.push("/panel/stadiums")
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
                <Image src={icoSettings} alt="Ajustes"></Image>
                <span>Ajustes</span>
              </button>

              <button className="btn-shutdown" type="button" onClick= {async ()=>{
                
                await logout();

                }
              }>
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