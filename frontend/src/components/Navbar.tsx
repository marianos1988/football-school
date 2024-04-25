import "../styles/Navbar.css";
import icoHome from "../assets/navbar/ico-home.png";
import icoArch from "../assets/navbar/icon-arch.png";
import icoClients from "../assets/navbar/ico-clients.png";
import icoMoney from "../assets/navbar/ico-money.png";
import icoReport from "../assets/navbar/ico-formulario.png";
import icoSettings from "../assets/navbar/icon-ajustes.png";
import icoShutDown from "../assets/navbar/icon-shutdown.png";
import logoSys from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { selectSection, unsetBlur, unsetBurguer } from "../reducers/properties/PropertiesSlice";
import { ButtonBurguer } from "./ButtonBurguer";
import { useNavigate } from "react-router-dom";




export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  return (
    <nav className="sidebar">
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <ButtonBurguer />
          <img src={logoSys} className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          <button type="button" onClick= {()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("home"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            navigate("/Home");
            }
          }>
            <img src={icoHome}/>
            <span>Inicio</span>
          </button>
          <button type="button" className="has-border" onClick= { ()=>{
            
              if(document.body.classList.contains("open")) {
                document.body.classList.toggle("open");
              }
              dispatch(selectSection("stadiums"));
              dispatch(unsetBlur()); 
              dispatch(unsetBurguer());
              navigate("/Stadiums");
              }
          }>
            <img src={icoArch} />
            <span>Canchas</span>
          </button>
          <button type="button" onClick= { ()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("clients"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            }
          }> 
            <img src={icoClients} />
            <span>Clientes</span>
          </button>
          <button type="button" onClick= { ()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("cash"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            }
          }>
            <img src={icoMoney} />
            <span>Caja</span>
          </button>
          <button type="button" className="has-border" onClick= { ()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("reports"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            }
          }>
            <img src={icoReport} />
            <span>Reportes</span>
          </button>
          <button type="button" onClick= { ()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("settings"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            }
          }>
            <img src={icoSettings} />
            <span>Ajustes</span>
          </button>

          <button className="btn-shutdown" type="button" onClick= { ()=>{
            
            if(document.body.classList.contains("open")) {
              document.body.classList.toggle("open");
            }
            dispatch(selectSection("logout"));
            dispatch(unsetBlur()); 
            dispatch(unsetBurguer());
            }
        }>
            <img src={icoShutDown} />
            <span>Cerrar sesion</span>
          </button>
        </nav>
      </div>
    </nav>
  )
}