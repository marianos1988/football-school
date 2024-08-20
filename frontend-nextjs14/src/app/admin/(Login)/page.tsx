"use client"
import "@/styles/Login.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function Login() { 
  return(
    <>
      <div className="container-login">
        <div className="box-login">
          <div className="avatar">
            <Image src={Logo} alt="Logo alquileres de canchas" />
          </div>
          <h2>Login</h2>
          <h3>Bienvenido Escuela de Futbol</h3>
          
          <form className="login-form">
            <div className="textbox">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="textbox">
              {/* <input type={(statePass) ? (`text`) : (`password`)} name="password" placeholder="Password" onChange={onInputChange} value={formLogin.password}/> */}
              <input type="password" name="password" placeholder="Password" />

            </div>
            {
              // (isActive) && (<h3 className="message-login">{message}</h3>)
            }
            {/* <button type="submit" onClick={(e)=>submitLogin(e)}>LOGIN</button> */}
            <button type="submit">LOGIN</button>
            {/* <Spinner 
              active= {stateSpinner}
              section={"login"}
            /> */}
            {/* <a href="https://website.com">Olvidaste tu contraseña?</a> */}
          </form>
        </div>
      </div>
    </>
  )
}