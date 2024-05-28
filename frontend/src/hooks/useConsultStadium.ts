import { useState } from "react";
import { useUtils } from "./useUtils"
import { ListReserves } from "../types/TypesConsultStadium";



export const useConsultStadium = () => {

  const { useFetch, getFullDate } = useUtils();
  const  dateToday = new Date();

  const newDate = getFullDate(dateToday);


  const [dateSelected, setDateSelected] = useState(newDate);
  const [listReserves, setListReserves] = useState<ListReserves>([]);

  const handleSetDateSelected = (date:string) => {
    setDateSelected(date);
  }

  const handleSetListReserves = (array:ListReserves)=> {
    setListReserves(array);
  }

  const selectDate = (date: string) => {

    const dateObject = {
      date: date
    }
    const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);
    // let array: any[] | ((prevState: ListReserves) => ListReserves) = [];
    data.then(
      ele => setListReserves(ele)
    )
    // setListReserves(array);
    console.log(listReserves)
    

  }

  const handleOnChangeDate = (date:string) => {

    setDateSelected(date);
    selectDate(date);
  }

  return {
    selectDate,
    dateSelected,
    listReserves,
    handleSetDateSelected,
    handleOnChangeDate,
    handleSetListReserves
  }
}