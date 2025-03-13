"use client"
import styles from "@/styleModules/register.module.css";
import { useSelector } from "react-redux";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { ErrorStore, PropertiesLogin } from "@/types/TypesLogin";
import { Spinner } from "@/components/Spinner";
import IcoOcultar from "../../../../public/ico-ocultar.png";
import { useRegister } from "@/hooks/useRegister";
 
export default function Register() {
  const { isActive, message } = useSelector((state:ErrorStore) => state.error);
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);

  const { statePass,statePass2, viewPass, viewPass2 } = useRegister();
  const { register, onInputChange, formRegister} = useRegister();

  return (
    <>
      <div className={styles.containerRegister}>
        <div className={styles.boxLogin}>
          <div className={styles.boxAvatar}>
            <Image className={styles.imgAvatar} src={Logo} alt="Logo" />
          </div> 
          <h2 className={styles.tittle}>Bienvenido al Panel</h2>
          <h3 className={styles.subtittle}>Crear cuenta</h3> 
          
          <form className={styles.registerForm}>

            <div className={styles.containerForm}>
              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Nombre</span>
                </div>
                <input type="text" className={styles.inputRegister} name="name" placeholder="Nombre" onChange={ onInputChange } value={formRegister.name} />
              </div> 

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Apellido</span>
                </div>
                <input type="text" className={styles.inputRegister} name="lastName" placeholder="Apellido" onChange={ onInputChange } value={formRegister.lastName} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Email</span>
                </div>
                <input type="text" className={styles.inputRegister} name="email" placeholder="Correo electronico" onChange={ onInputChange } value={formRegister.email} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Telefono</span>
                </div>
                <input type="number" className={styles.inputRegister} name="phone" placeholder="Telefono" onChange={ onInputChange } value={formRegister.phone} />
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Contraseña</span>
                </div>
                <input type={(statePass) ? (`text`) : (`password`)} name="password" className={styles.inputRegister} placeholder="Password" onChange={onInputChange} value={formRegister.password}/>

                <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass) ? (`${styles.icoHideActive}`) : (`${styles.icoHideInactive}`)}  onClick={viewPass} />     
              </div>

              <div className={styles.textBox}>
                <div className={styles.BoxSpan}>
                  <span className={styles.spanRegister}>Repetir contraseña</span>
                </div>
                <input type={(statePass2) ? (`text`) : (`password`)} name="passwordRepeat" className={styles.inputRegister} placeholder="Password" onChange={onInputChange} value={formRegister.passwordRepeat}/>

                <Image src={IcoOcultar} alt="Mostrar Password" className={(statePass2) ? (`${styles.icoHideActive}`) : (`${styles.icoHideInactive}`)}  onClick={viewPass2} />     
              </div>
              
            </div>

            {
              (isActive) && (<h3 className={styles.messageRegister}>{message}</h3>)
            }

            <button className={styles.buttonRegister}  type="submit" onClick={(e)=>{register(e)}}
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