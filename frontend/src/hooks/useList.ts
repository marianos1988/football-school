import { useUtils } from "./useUtils"


export const useList = () => {

    const {useFetch} = useUtils()

    const selectReserveRow = (id:number) => {

        const object = {
          id: id
        }
        const row = useFetch("http://localhost:3000/Stadiums/Consult/Edit",object);
        row.then(
          ele => console.log(ele)
        )
    }

  return {
    selectReserveRow
  }
}