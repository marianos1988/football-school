import { setStateSpinner2, unsetStateSpinner2, setStateSpinner3, unsetStateSpinner3 } from "@/reducers/properties/PropertiesSlice";
import { activeErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
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
  const { objectToSendWithPost, runErrorPoster } = useUtils()

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

    try {

      dispatch(setStateSpinner2());
      const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api",object); 
      const newID = await response.json();
      dispatch(unsetStateSpinner2());

      if(newID.thereIsError) {
        dispatch(activeErrorPoster({
          tittle: newID.tittle,
          subtittle: newID.subtittle
        }))
      } else {
        
        router.push("/panel/stadiums/reservationStadium");  
      }

    } catch {

    }


 
  }

  const handleConsultStadium =  async (parametersConsultStadium: {idStadium: number,numberStadium: number}) => {

    const object = objectToSendWithPost(parametersConsultStadium);

    try {
      dispatch(setStateSpinner3());
      const response = await fetch("http://localhost:3001/panel/stadiums/consultStadium/api", object)
      const data = await response.json();
      dispatch(unsetStateSpinner3());
      if(data.thereIsError) {
        
          runErrorPoster(data.tittle,data.subtittle)
      }
      else { 
        
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