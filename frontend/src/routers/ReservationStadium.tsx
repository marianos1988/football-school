import { useSelector } from "react-redux"



export const ReservationStadium = () => {

const dataStadium = useSelector((state:ReservationStadium) => state.reservationStadium);

console.log(dataStadium)
  return (
    <>
    
    </>
  )
}