import style from "@/styleModules/warningPoster.module.css";
import { Button } from "./Button";

export const WarningPoster = () => {

  return (
    <>
      <div className={style.poster}>
        <h2 className={style.tittle}>Error</h2>
        <h3 className={style.subtittle}>No se puede conectar al servidor</h3>
        <Button name={"Cerrar"} handleFunction={undefined} moving={false} nameEffect={""}        
        />
      </div>
    </>
  )
}