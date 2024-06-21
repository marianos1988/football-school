import { useState } from "react"
import { useUtils } from "./useUtils"
import { activeError } from "../reducers/errorsSlice/ErrorsSlices";
import { useDispatch } from "react-redux";

export const useList = () => {

    const dispatch= useDispatch();
    
    const initialState = {

      id: 0,
      idStadium: 0,
      nameClient: "",
      phone: "",
      date: "",
      time: "",
      cash: "" 
    }
 
    const [row, setRow] = useState(initialState);
    const {useFetch} = useUtils();
 
    const selectReserveRow = (id:number) => {

        const object = {
          id: id
        }
        const row = useFetch("http://localhost:3000/Stadiums/Consult/Edit",object);
        row.then(
          ele => {
           // setear Error
           if(ele === "Reserva incorrecta" || ele === "La reserva no existe" || ele === "No se puede conectar a la base de datos") {
            dispatch(activeError(ele));
           }
          }
        )
    }

  return {
    selectReserveRow
  }
}