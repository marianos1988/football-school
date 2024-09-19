import { setStateSpinner2, unsetStateSpinner2 } from "@/reducers/properties/PropertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";


type Props = {
  idStadium: number,
  idUser: number,
  numberStadium: number,
  name: string
}

export const useCardStadium =  () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleReservationStadium = async ({ idStadium, idUser, numberStadium, name }:Props) => {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
       idStadium,
       idUser,
       numberStadium,
       name
      }
        ),
      headers : {
          "Content-type" : "application/json"
      }
    }

    dispatch(setStateSpinner2());
    const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api",object);
    const newID = await response.json(); 
    dispatch(unsetStateSpinner2());

    router.push("/panel/stadiums/reservationStadium");  
  }
  return {
    handleReservationStadium
  }
}