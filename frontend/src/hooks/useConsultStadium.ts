import { useState } from "react";
import { useUtils } from "./useUtils"
import { ListReserves } from "../types/TypesConsultStadium";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeAllStadium, inactiveAllStadium, setDateSelected } from "../reducers/consultStadium/ConsultStadiumSlice";



export const useConsultStadium = () => {
  const dispatch= useDispatch();

  const { idStadium } = useSelector((state:any) => state.reservationStadium);
  const { allStadium, dateSelected } = useSelector((state: any) => state.consultStadium)
  const { useFetch } = useUtils();

  const [listReserves, setListReserves] = useState<ListReserves>([]);

  const handleSetDateSelected = (date:string) => {
    setDateSelected(date);
  }

  const handleSetListReserves = (array:ListReserves)=> {
    setListReserves(array);
  }

  const selectDate = () => {


    const dateObject = {
      date: dateSelected,
      idStadium: idStadium,
      allStadium: allStadium
    }
    const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);

    data.then(
      ele => setListReserves(ele)
    )

     

  }

  const handleOnChangeDate =  async (date:string) => {

    dispatch(setDateSelected(date));

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
    listReserves,
    handleSetDateSelected,
    handleOnChangeDate,
    handleSetListReserves,
    selectAllStadiums
  }
}