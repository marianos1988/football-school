import "../styles/Navbar.css";
import icoHome from "../assets/navbar/ico-home.png";
import icoArch from "../assets/navbar/icon-arch.png";
import icoClients from "../assets/navbar/ico-clients.png";
import icoMoney from "../assets/navbar/ico-money.png";
import icoReport from "../assets/navbar/ico-formulario.png";
import icoSettings from "../assets/navbar/icon-ajustes.png";
import icoShutDown from "../assets/navbar/icon-shutdown.png";
import logoSys from "../assets/logo.png";
import { ButtonBurguer } from "./ButtonBurguer";



export const Navbar = () => {

  return (
    <nav className="sidebar">
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <ButtonBurguer />
          <img src={logoSys} className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          <button type="button">
            <img src={icoHome}/>
            <span>Inicio</span>
          </button>
          <button type="button" className="has-border">
            <img src={icoArch} />
            <span>Canchas</span>
          </button>
          <button type="button">
            <img src={icoClients} />
            <span>Clientes</span>
          </button>
          <button type="button">
            <img src={icoMoney} />
            <span>Caja</span>
          </button>
          <button type="button" className="has-border">
            <img src={icoReport} />
            <span>Reportes</span>
          </button>
          <button type="button">
            <img src={icoSettings} />
            <span>Ajustes</span>
          </button>

          <button className="btn-shutdown" type="button">
            <img src={icoShutDown} />
            <span>Cerrar sesion</span>
          </button>
        </nav>
      </div>
    </nav>
  )
}