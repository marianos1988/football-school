"use client"
import "@/styles/Login.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import IcoOcultar from "../../../../public/ico-ocultar.png";
import { useSelector } from "react-redux";
import { useLogin } from "@/hooks/useLogin";
import { ErrorStore, PropertiesLogin } from "@/types/TypesLogin";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";


export default function Login() {  
  const route = useRouter();
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties)
  const { isActive, message } = useSelector((state:ErrorStore) => state.error)

  const { formLogin, onInputChange, submitLogin, statePass, viewPass } = useLogin();

  
  return(
    <>
    <div className="container-login">
      <div className="box-login">
        <div className="avatar">
          <Image src={Logo} alt="Logo" />
        </div>
        <h2>Bienvenido al Panel</h2>
        <h3>Iniciar Sesion</h3> 
        
        <form className="login-form">
          <div className="textbox">
            <input type="text" name="username" placeholder="Username" onChange={onInputChange} value={formLogin.username} />
          </div>
          <div className="textbox">
            <input type={(statePass) ? (`text`) : (`password`)} name="password" placeholder="Password" onChange={onInputChange} value={formLogin.password}/>

            <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass) ? (`ico-ocultar active`) : (`ico-ocultar inactive`)}  onClick={viewPass} />     
          </div>
          {
            (isActive) && (<h3 className="message-login">{message}</h3>) 
          }
          <button type="submit" onClick={async (e)=>{
            const validation:boolean = await submitLogin(e);
            if(validation) {
              route.push("/panel/home");
            }
            }}>LOGIN</button> 
          <Spinner 
            active= {stateSpinner}
            section={"login"}
          />
          {/* <a href="https://website.com">Olvidaste tu contraseña?</a> */}
        </form>
      </div>

    </div>
    </>
  )
}