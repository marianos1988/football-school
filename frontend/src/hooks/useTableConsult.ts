import { TEditReserve, TListReserves } from "@/types/TypesConsultStadium";
import { useUtils } from "./useUtils";
import { useRouter } from "next/navigation";

export const useTableConsult = () => {

  const { useFetch, addCero } = useUtils();
  const router = useRouter();
  const showDataInTable = (ListReserves:TListReserves) => {

    let newListForShow = [];
    

    for(let reserve of ListReserves) {

      const newDate = new Date(reserve.date);
      const showDate = `${addCero(newDate.getDate()+1)}-${addCero(newDate.getMonth()+1)}-${newDate.getFullYear()}`;
      const time = reserve.time.split(":");
      const showTime = `${addCero(parseInt(time[0]))}:${addCero(parseInt(time[1]))}Hs`
      const showCash = `$${reserve.cash}`
      

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
        cash: showCash
      }
      newListForShow.push(object); 
    }
  
    return newListForShow;

  }

  const initialEditReserve = async (reserve:TEditReserve) => {


    const modifyReserve = {
      idReserve: reserve.idReserve,
      idStadium: reserve.idStadium,
    }

    const data = await useFetch(`http://localhost:3001/panel/stadiums/consultStadium/editReserve/api`, modifyReserve); 
    if(data) {
      router.push("/panel/stadiums/consultStadium/editReserve")

    } else {
      // tirra error que no pyuede abrir editar o error de conexion
    }

  }

  return {
    showDataInTable,
    initialEditReserve
  }
}