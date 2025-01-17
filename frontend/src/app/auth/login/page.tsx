"use client"

import styles from "@/styleModules/login.module.css";
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
    <div className={styles.containerLogin}>
      <div className={styles.boxLogin}>
        <div className={styles.boxAvatar}>
          <Image className={styles.imgAvatar} src={Logo} alt="Logo" />
        </div>
        <h2 className={styles.tittle}>Bienvenido al Panel</h2>
        <h3 className={styles.subtittle}>Iniciar Sesion</h3> 
        
        <form className={styles.loginForm}>
          <div className={styles.containerForm}>

            <div className={styles.textBox}>
              <div className={styles.BoxSpan}>
                <span className={styles.spanLogin}>Email</span>
              </div>
              <input type="text" className={styles.inputLogin} name="email" placeholder="Email" onChange={onInputChange} value={formLogin.username} />
            </div>

            <div className={styles.textBox}>
              <div className={styles.BoxSpan}>
                <span className={styles.spanLogin}>Contraseña</span>
              </div>
              <input type={(statePass) ? (`text`) : (`password`)} name="password" className={styles.inputLogin} placeholder="Password" onChange={onInputChange} value={formLogin.password}/>

              <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass) ? (`${styles.icoHideActive}`) : (`${styles.icoHideInactive}`)}  onClick={viewPass} />     
            </div>
            
          </div>


          {
            (isActive) && (<h3 className={styles.messageLogin}>{message}</h3>) 
          }
          <button type="submit" className={styles.buttonLogin} onClick={async (e)=>{
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