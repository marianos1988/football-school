"use client"
import styles from "@/styleModules/register.module.css";
import "@/styles/Login.css";
import { useSelector } from "react-redux";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { ErrorStore, PropertiesLogin } from "@/types/TypesLogin";
import { Spinner } from "@/components/Spinner";
 
export default function Register() {
  const { isActive, message } = useSelector((state:ErrorStore) => state.error)
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties)
  return (
    <>
      <div className={styles.containerRegister}>
        <div className={styles.boxLogin}>
          <div className={styles.boxAvatar}>
            <Image className={styles.imgAvatar} src={Logo} alt="Logo" />
          </div>
          <h2 className={styles.tittle}>Bienvenido al Panel</h2>
          <h3 className={styles.subtittle}>Registrarse</h3> 
          
          <form className={styles.registerForm}>
            <div className={styles.textBox}>
              <span className={styles.spanRegister}>Usuario</span>
              <input type="text" className={styles.inputRegister} name="username" placeholder="Username" onChange={ ()=>{} } value={"formLogin.username"} />
            </div>
            <div className="textbox">
              <span className={styles.spanRegister}>Usuario</span>
              <input type="text" className={styles.inputRegister} name="password" placeholder="Password" onChange={()=>{}} value={"formLogin.password"}/>  
            </div>
            {
              (isActive) && (<h3 className={styles.messageRegister}>{message}</h3>)
            }
            <button className={styles.buttonRegister}  type="submit" onClick={()=>{}}
              >LOGIN</button> 
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