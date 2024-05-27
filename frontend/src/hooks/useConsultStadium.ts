import { useUtils } from "./useUtils"



export const useConsultStadium = () => {

  const { useFetch } = useUtils();

  const selectDate = (date: string) => {

    const data = useFetch("http://localhost:3000/Stadiums/Consult",date);
    console.log(data);

  }

  return {
    selectDate
  }
}