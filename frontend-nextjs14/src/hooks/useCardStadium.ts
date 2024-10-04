import { setStateSpinner2, unsetStateSpinner2 } from "@/reducers/properties/PropertiesSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useLogin } from "./useLogin";
import { useUtils } from "./useUtils";


type Props = {

    idStadium: number,
    idUser: number,
    numberStadium: number,
    name: string

}

export const useCardStadium =  () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const  {logout } = useLogin()
  const { objectToSendWithPost } = useUtils()

  const handleReservationStadium = async (parametersStadium :Props) => {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
       idStadium: parametersStadium.idStadium,
       idUser: parametersStadium.idUser,
       numberStadium: parametersStadium.numberStadium,
       name: parametersStadium.name
      } 
        ),
      headers : {
          "Content-type" : "application/json"
      }
    } 

    dispatch(setStateSpinner2());
    const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api",object); 
    const newID = await response.json();
    if(newID === "Error al conectar con el servidor") {
      logout();
    }
    dispatch(unsetStateSpinner2());

    router.push("/panel/stadiums/reservationStadium");  
  }

  const handleConsultStadium =  async (idStadium: number) => {

    const object = objectToSendWithPost(idStadium);

    try {
      const response = await fetch("http://localhost:3001/panel/stadiums/consultStadium/api", object)
      const data = await response.json();
      if(data) {
        router.push("/panel/stadiums/consultStadium");
      }
    } catch {

    }

  }
  return {
    handleReservationStadium,
    handleConsultStadium
  }
}