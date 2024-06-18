import { useState } from "react"
import { useUtils } from "./useUtils"


export const useList = () => {

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
          }
        )
    }

  return {
    selectReserveRow
  }
}