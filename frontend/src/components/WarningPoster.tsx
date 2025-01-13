import style from "@/styleModules/warningPoster.module.css";
import { Button } from "./Button";
import { inactiveErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";
import { unsetBlur } from "@/reducers/properties/PropertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export const WarningPoster = () => {


  const { messageTittle, messageSubtittle } = useSelector((state:{
    errorPoster: any;
    messageTitte:string,
    messageSutbtitle:string
}) => state.errorPoster)
  
const route = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.poster}>
        <h2 className={style.tittle}>{messageTittle}</h2>
        <h3 className={style.subtittle}>{messageSubtittle}</h3>
        <Button name={"Cerrar"} handleFunction={()=>{
          dispatch(inactiveErrorPoster());
          dispatch(unsetBlur());
          if(messageTittle === "Token Error") {
            
            if(localStorage.getItem("token")) {
              localStorage.removeItem("token")
            }
            route.push("/auth/login");
          }
        }} moving={false} nameEffect={""}        
        />
      </div>
    </>
  )
}