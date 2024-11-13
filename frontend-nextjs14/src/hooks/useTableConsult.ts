import { TEditReserve, TListReserves } from "@/types/TypesConsultStadium";
import { useUtils } from "./useUtils";
import { useRouter } from "next/navigation";

export const useTableConsult = () => {

  const { useFetch } = useUtils();
  const router = useRouter();
  const showDataInTable = (ListReserves:TListReserves) => {

    let newListForShow = [];
    
    for(let reserve of ListReserves) {

      const newDate = new Date(reserve.date);
      const showDate = `${newDate.getDate()+1}-${newDate.getMonth()+1}-${newDate.getFullYear()}`;
      const showTime = `${reserve.time}Hs`;

      let object = {
        idReserve: reserve.idReserve,
        idStadium: reserve.idStadium,
        idUser: reserve.idUser,
        numberStadium: reserve.numberStadium,
        nameClient: reserve.nameClient,
        phone: reserve.phone,
        date: showDate,
        time:showTime,
        email: reserve.email,
        cash: reserve.cash
      }
      newListForShow.push(object); 
    }
  
    return newListForShow;

  }

  const initialEditReserve = async (reserve:TEditReserve) => {
    
    const data = await useFetch(`http://localhost:3001/panel/stadiums/consultStadium/editReserve/api`, reserve);

    // if(data) {
    //   router.push("/panel/stadiums/consultStadium/editReserve")

    // } else {
    //   // tirra error que no pyuede abrir editar o error de conexion
    // }

  }

  return {
    showDataInTable,
    initialEditReserve
  }
}