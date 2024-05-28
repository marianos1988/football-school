import { useState } from "react";
import { useUtils } from "./useUtils"



export const useConsultStadium = () => {

  const { useFetch, getFullDate } = useUtils();
  const  dateToday = new Date();

  const newDate = getFullDate(dateToday);


  const [dateSelected, setDateSelected] = useState(newDate);

  const handleSetDateSelected = (date:string) => {
    setDateSelected(date);
  }

  const selectDate = (date: string) => {

    const dateObject = {
      date: date
    }
    const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);
    console.log(data)
    

  }

  const handleOnChangeDate = (date:string) => {

    setDateSelected(date);
  }

  return {
    selectDate,
    dateSelected,
    handleSetDateSelected,
    handleOnChangeDate
  }
}