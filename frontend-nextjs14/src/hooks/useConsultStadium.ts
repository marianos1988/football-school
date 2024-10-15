import { useState } from "react";
import { useUtils } from "./useUtils"
import { ListReserves } from "@/types/TypesConsultStadium";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeAllStadium, inactiveAllStadium, setDateSelected } from "../reducers/consultStadium/ConsultStadiumSlice";
import { inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { FormReservationEdit } from "../types/TypesFormReservation";
import { init } from "next/dist/compiled/webpack/webpack";
import { parametersStadiums } from "@/panelParameters/parameters";


 
export const useConsultStadium = () => { 
  const dispatch= useDispatch();

  // const { idStadium } = useSelector((state:any) => state.reservationStadium);
  // const { allStadium, dateSelected } = useSelector((state: any) => state.consultStadium)
  const { useFetch } = useUtils();
  // const [subSection, setSubSection] = useState("consultStadium")
  const [listReserves, setListReserves] = useState<ListReserves>([]);

  const initialStateAllStadiums = {
    allStadiums: false,
    cantStadiums: parametersStadiums.count
  }

  const [stateAllStadiums, setStateAllStadiums] = useState(initialStateAllStadiums);
  const [dateSelected, setDateSelected] = useState("");


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
    setDateSelected(date);
  }

  // const handleSetSubSection = (subSection:string) => {
  //   setSubSection(subSection);
  // }

  const handleSetListReserves = (array:ListReserves)=> {
    setListReserves(array);
  }

  const selectDate = () => {


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
    // dispatch(setDateSelected(date));
    setDateSelected(date);


  }

  const selectAllStadiums = ()=> {
    dispatch(inactiveError());
    if(stateAllStadiums.allStadiums) {
      setStateAllStadiums({...stateAllStadiums,allStadiums: false}) 
    } else {
      setStateAllStadiums({...stateAllStadiums,allStadiums: true}) 
    }
  }

  return {
    selectDate,
    stateAllStadiums,
    listReserves,
    handleSetDateSelected,
    dateSelected,
    handleOnChangeDate,
    handleSetListReserves,
    selectAllStadiums,
    // subSection,
    // handleSetSubSection,
    handleSetEditRow,
    editRow
  }
}