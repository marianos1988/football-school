import { useState } from "react";
import { useUtils } from "./useUtils"
import { ListReserves, TConsultAllStadium, TConsultStadium, TListReserves } from "@/types/TypesConsultStadium";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeAllStadium, inactiveAllStadium, setDateSelected } from "../reducers/consultStadium/ConsultStadiumSlice";
import { inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { FormReservationEdit } from "../types/TypesFormReservation";
import { useRouter } from "next/navigation";
import { parametersStadiums } from "@/panelParameters/parameters";


 
export const useConsultStadium = () => {
  
  const dispatch= useDispatch();
  const route = useRouter();

  // const { idStadium } = useSelector((state:any) => state.reservationStadium);
  // const { allStadium, dateSelected } = useSelector((state: any) => state.consultStadium)
  const { useFetch, objectToSendWithPost } = useUtils();
  // const [subSection, setSubSection] = useState("consultStadium")

  const getToday = new Date;

  const initialInputDate = `${getToday.getFullYear()}-${getToday.getMonth()+1}-${getToday.getDate()}`;
  const [dateToday, setDateToday] = useState(initialInputDate)
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
    nameClient: "",
    phone: "",
    date: "",
    time: "",
    email: "",
    cash: 0
  }]

  const [listReserves, setListReserves] = useState(initialListReserve)

  const initialEditRow = {
    idStadium: 0,
    id: 0,
    nameClient: "",
    phone: "",
    date: "",
    time: "",
    cash: 0,
  }

  const [editRow, setEditRow] = useState(initialEditRow);

  const handleSetEditRow = (row:FormReservationEdit) => {
    setEditRow(row)
  }

  const handleSetDateSelected = (date:string) => {
    setDateToday(date);
  }

  // const handleSetSubSection = (subSection:string) => {
  //   setSubSection(subSection);
  // }

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

    let object = {

      date: dateToday,
      idStadium: stadium.idStadium,
      idUser:stadium.idUser,
      allStadiums: stateAllStadiums

    }



    const data = await useFetch("http://localhost:3001/panel/stadiums/consultStadium/search/api/", object)

    // const dateObject = {
    //   date: dateSelected,
    //   idStadium: idStadium,
    //   allStadium: allStadium
    // }
    // const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);

    // data.then(
    //   ele => setListReserves(ele)
    // )

  }

  const handleOnChangeDate =  async (date:string) => {
    dispatch(inactiveError());
    // // dispatch(setDateSelected(date));
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
    route.back();
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
    // subSection,
    // handleSetSubSection,
    handleSetEditRow,
    returnPage,
    editRow 
  }
}