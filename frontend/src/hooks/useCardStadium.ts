import { useUtils } from "./useUtils"

export const useCardStadium = () => {

  const handleReservationStadium = (id: number) => {
    const { useFetch } = useUtils();

    let object = {
                
      method : "POST",
      body : JSON.stringify({
        id: id
      }
        ),
      headers : {
          "Content-type" : "application/json"
      }
    }

    const response = useFetch("http://localhost:3001/panel/stadiums/reservationStadium/api",object);
    console.log(response)
  }
  return {
    handleReservationStadium
  }
}