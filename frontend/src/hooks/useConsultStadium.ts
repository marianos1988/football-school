import { useUtils } from "./useUtils"



export const useConsultStadium = () => {

  const { useFetch } = useUtils();

  const getTodayDate = () => {
    const data = useFetch("http://localhost:3000/Stadiums/Consult","")
    data.then(
      data => console.log(data)
    );
  }

  const selectDate = (date: string) => {

    const dateObject = {
      date: date
    }
    const data = useFetch("http://localhost:3000/Stadiums/Consult",dateObject);
    console.log(data);;
    

  }

  return {
    selectDate,
    getTodayDate
  }
}