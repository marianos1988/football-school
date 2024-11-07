import { useState } from "react";
import { useUtils } from "./useUtils"
import { TConsultAllStadium, TConsultStadium, TListReserves } from "@/types/TypesConsultStadium";
import { useDispatch } from "react-redux";
import { activeError, inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { useRouter } from "next/navigation";


export const useConsultStadium = () => {
  
  const dispatch= useDispatch();
  const route = useRouter();


  const { useFetch, getFullDate } = useUtils();


  const getToday = new Date;

  const initialInputDate = getFullDate(getToday);

  const [dateToday, setDateToday] = useState(initialInputDate);
  const [stateAllStadiums, setStateAllStadiums] = useState(false);
 
  
  const initialStadium = {
    idStadium: 0,
    idUser: 0,
    name: "",
    typeFloor:"",
    description: "", 
    typeStadium: 0,
    numberStadium: 0
  }

  const [ stadium, setStadium] = useState(initialStadium);

  const initialAllStadium = [{
    idStadium: 0,
    idUser: 0,
    name: "",
    typeFloor:"",
    description: "", 
    typeStadium: 0,
    numberStadium: 0
  }]

  const [ allStadiums, setAllStadiums] = useState(initialAllStadium);

  const initialListReserve = [{
    idReserve: 0,
    idStadium: 0,
    idUser: 0,
    numberStadium: 0,
    nameClient: "",
    phone: "",
    date: "",
    time: "",
    email: "",
    cash: 0
  }]

  const [listReserves, setListReserves] = useState(initialListReserve)

  const handleSetDateSelected = (date:string) => {
    setDateToday(date);
  }


  const handleSetListReserves = (array:TListReserves)=> {
    setListReserves(array);
  } 

  const handleSetStadium = (stadium:TConsultStadium) => {
    setStadium(stadium);
  }

  const handleAllSetStadiums = (stadium:TConsultAllStadium) => {
    setAllStadiums(stadium);
  }

  const selectDate = async () => {


    const object = {
      idUser: stadium.idUser,
      idStadium: stadium.idStadium,
      date: dateToday,
      allStadiums: stateAllStadiums

    }
    dispatch(inactiveError()); 
    const data = await useFetch("http://localhost:3001/panel/stadiums/consultStadium/search/api/", object) 
    console.log(data)
    if(data.isThereError) {
      dispatch(activeError(data.message));
      handleSetListReserves([]);
    } else {
      handleSetListReserves(data.listReserves);

    }

  }

  const handleOnChangeDate =  async (date:string) => {
    dispatch(inactiveError());
    setDateToday(date);

  }

  const selectAllStadiums = ()=> {
    dispatch(inactiveError());
    if(stateAllStadiums) {
      setStateAllStadiums(false) 
    } else {
      setStateAllStadiums(true) 
    }
  }

  const returnPage = (e: { preventDefault: () => void; })=> {
    e.preventDefault();
    route.push("/panel/stadiums");

  }

  return {
    selectDate,
    stateAllStadiums,
    stadium,
    handleSetStadium,
    allStadiums,
    handleAllSetStadiums,
    listReserves,
    handleSetDateSelected,
    dateToday,
    handleOnChangeDate,
    handleSetListReserves,
    selectAllStadiums,
    returnPage,

  }
}