
import { useUtils } from "./useUtils"
import { activeError, inactiveError } from "../reducers/errorsSlice/ErrorsSlices";
import { useDispatch } from "react-redux";





export const useList = () => {

    const dispatch= useDispatch();


    const {useFetch} = useUtils();
    let rowToEdit:any;
    const selectReserveRow = async (id:number) => {

 
        const object = {
          id: id
        }
       await useFetch("http://localhost:3000/Stadiums/Consult/Edit",object).then(
          (ele) => {

           if(ele === "Reserva incorrecta" || ele === "La reserva no existe" || ele === "No se puede conectar a la base de datos") {
            dispatch(activeError(ele));
           } else {

            dispatch(inactiveError());
            rowToEdit = ele;
           }
          }
        )
          return rowToEdit


    }

  return {
    selectReserveRow,
  }
}