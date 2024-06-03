import { useState } from "react";
import { useUtils } from "./useUtils"
import { ListReserves } from "../types/TypesConsultStadium";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeAllStadium, inactiveAllStadium } from "../reducers/consultStadium/ConsultStadiumSlice";



export const useConsultStadium = () => {
  const dispatch= useDispatch();

  const { idStadium } = useSelector((state:any) => state.reservationStadium)
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
      date: date,
      idStadium: idStadium
    }
    const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);

    data.then(
      ele => setListReserves(ele)
    )

     

  }

  const handleOnChangeDate = (date:string) => {

    setDateSelected(date);
    selectDate(date);
  }

  const selectAllStadiums = ( checked:any )=> {
    if(checked) {
     dispatch(activeAllStadium()); 
    } else {
      dispatch(inactiveAllStadium());
    }
  }

  return {
    selectDate,
    dateSelected,
    listReserves,
    handleSetDateSelected,
    handleOnChangeDate,
    handleSetListReserves,
    selectAllStadiums
  }
}