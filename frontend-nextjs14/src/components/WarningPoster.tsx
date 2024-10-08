import style from "@/styleModules/warningPoster.module.css";
import { Button } from "./Button";
import { inactiveErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";
import { useDispatch } from "react-redux";

export const WarningPoster = () => {

  const dispatch = useDispatch();
  return (
    <>
      <div className={style.poster}>
        <h2 className={style.tittle}>Error</h2>
        <h3 className={style.subtittle}>No se puede conectar al servidor</h3>
        <Button name={"Cerrar"} handleFunction={()=>{dispatch(inactiveErrorPoster())}} moving={false} nameEffect={""}        
        />
      </div>
    </>
  )
}