import "../styles/Login.css"
import Logo from "../assets/logo.png"
import Ocultar from "../assets/ico-ocultar.png"
import { useLogin } from "../hooks/useLogin"
import { Spinner } from "../components/Spinner"
import { useSelector } from "react-redux";
import { ErrorStore, PropertiesLogin } from "../types/TypesLogin"

export const Login = () => {

  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties)
  const { isActive, message } = useSelector((state:ErrorStore) => state.error)

  const { formLogin, onInputChange, submitLogin, statePass, ViewPass } = useLogin();

  return (
    <div className="container-login">
      <div className="box-login">
        <div className="avatar">
          <img src={Logo} />
        </div>
        <h2>Login</h2>
        <h3>Bienvenido Escuela de Futbol</h3>
        
        <form className="login-form">
          <div className="textbox">
            <input type="text" name="username" placeholder="Username" onChange={onInputChange} value={formLogin.username} />
          </div>
          <div className="textbox">
            <input type={(statePass) ? (`text`) : (`password`)} name="password" placeholder="Password" onChange={onInputChange} value={formLogin.password}/>
            <img className={(statePass) ? (`ico-ocultar active`) : (`ico-ocultar inactive`)}  src={Ocultar} onClick={ViewPass} alt="Mostrar Password" />
          </div>
          {
            (isActive) && (<h3 className="message-login">{message}</h3>)
          }
          <button type="submit" onClick={(e)=>submitLogin(e)}>LOGIN</button>
          <Spinner 
            active= {stateSpinner}
            section={"login"}
          />
          {/* <a href="https://website.com">Olvidaste tu contraseña?</a> */}
        </form>
      </div>

    </div>
  )
}