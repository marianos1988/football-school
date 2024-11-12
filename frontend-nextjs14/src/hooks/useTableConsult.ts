import { TListReserves } from "@/types/TypesConsultStadium";

export const useTableConsult = () => {

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


  return {
    showDataInTable
  }
}