import style from "@/styleModules/warningPoster.module.css";
import { Button } from "./Button";
import { inactiveErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";
import { unsetBlur } from "@/reducers/properties/PropertiesSlice";
import { useDispatch, useSelector } from "react-redux";

export const WarningPoster = () => {


  const { messageTittle, messageSubtittle } = useSelector((state:any) => state.errorPoster)
  
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.poster}>
        <h2 className={style.tittle}>{messageTittle}</h2>
        <h3 className={style.subtittle}>{messageSubtittle}</h3>
        <Button name={"Cerrar"} handleFunction={()=>{
          dispatch(inactiveErrorPoster());
          dispatch(unsetBlur());
        }} moving={false} nameEffect={""}        
        />
      </div>
    </>
  )
}