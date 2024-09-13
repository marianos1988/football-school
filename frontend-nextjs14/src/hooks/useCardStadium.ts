
import { useRouter } from "next/navigation";

type Props = {
  id: number,
  idUser: number,
  numberStadium: number,
  name: string
}

export const useCardStadium =  () => {
  const router = useRouter();

  const handleReservationStadium = async ({ id, idUser, numberStadium, name }:Props) => {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
       id,
       idUser,
       numberStadium,
       name
      }
        ),
      headers : {
          "Content-type" : "application/json"
      }
    }

    const response = await fetch("http://localhost:3001/panel/stadiums/reservationStadium/api",object);
    const newID = await response.json(); 

    router.push("/panel/stadiums/reservationStadium"); 
  }
  return {
    handleReservationStadium
  }
}