"use client"
import styles from "@/styleModules/register.module.css";
import "@/styles/Login.css";
import { useSelector } from "react-redux";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { ErrorStore, PropertiesLogin } from "@/types/TypesLogin";
import { Spinner } from "@/components/Spinner";
import { useLogin } from "@/hooks/useLogin";
import IcoOcultar from "../../../../public/ico-ocultar.png";
 
export default function Register() {
  const { isActive, message } = useSelector((state:ErrorStore) => state.error);
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);

  const { statePass, viewPass } = useLogin()
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

            <div className={styles.containerForm}>
              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Nombre</span>
                </div>
                <input type="text" className={styles.inputRegister} name="name" placeholder="Nombre" onChange={ ()=>{} } value={"formLogin.username"} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Apellido</span>
                </div>
                <input type="text" className={styles.inputRegister} name="lastname" placeholder="Apellido" onChange={ ()=>{} } value={"formLogin.username"} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Email</span>
                </div>
                <input type="text" className={styles.inputRegister} name="email" placeholder="Correo electronico" onChange={ ()=>{} } value={"formLogin.username"} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Telefono</span>
                </div>
                <input type="text" className={styles.inputRegister} name="phone" placeholder="Telefono" onChange={ ()=>{} } value={"formLogin.username"} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Contraseña</span>
                </div>
                <input type={(statePass) ? (`text`) : (`password`)} name="password" className={styles.inputRegister} placeholder="Password" onChange={()=>{}} value={"formLogin.password"}/>

                <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass) ? (`${styles.icoHideActive}`) : (`${styles.icoHideInactive}`)}  onClick={viewPass} />     
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Repetir contraseña</span>
                </div>
                <input type={(statePass) ? (`text`) : (`password`)} name="password" className={styles.inputRegister} placeholder="Password" onChange={()=>{}} value={"formLogin.password"}/>

                <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass) ? (`${styles.icoHideActive}`) : (`${styles.icoHideInactive}`)}  onClick={viewPass} />     
              </div>
              
            </div>

            {
              (isActive) && (<h3 className={styles.messageRegister}>{message}</h3>)
            }

            <button className={styles.buttonRegister}  type="submit" onClick={()=>{}}
              >Registrar</button> 

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