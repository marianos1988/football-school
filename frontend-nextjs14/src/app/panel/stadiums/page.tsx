"use client"
import "@/styles/Stadiums.css";
import { setStateSpinner, unsetStateSpinner } from "@/reducers/properties/PropertiesSlice";
import { useDispatch } from "react-redux";
import { CardStadium } from "@/components/CardStadium";
import { useEffect, useState } from "react";
import { useUtils } from "@/hooks/useUtils";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { PropertiesLogin } from "@/types/TypesLogin";
import { Spinner } from "@/components/Spinner";
import { activeErrorPoster } from "@/reducers/errorsPoster/errorPosterSlice";



export default function Stadiums() {

  const [listStadiums, setListStadiums] = useState([]);
  const { stateSpinner } = useSelector((state:PropertiesLogin) => state.properties);
  const { checkLogin,runErrorPoster } = useUtils();
  const route = useRouter();
  const dispatch = useDispatch();




  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    } else {

      try {

        dispatch(setStateSpinner()); 
        const response = await fetch("http://localhost:3001/panel/stadiums/api/");
        const newListStadiums = await response.json();
        dispatch(unsetStateSpinner());

        if(newListStadiums.thereIsError === true) { 
          runErrorPoster(newListStadiums.tittle,newListStadiums.subtittle)
        }
        else {
          setListStadiums(newListStadiums);   
        }



  
      } catch (error) {

        console.log(error)
      }
    }
  }
  

  useEffect(()=>{
    checkLoginPage();
  },[]);

  return (
    <>
      {
          <div className="container-stadiums">
            <h1>Mis Canchas</h1>
            <Spinner active={stateSpinner} section={"stadiums"} /> 
            <div className="list-stadiums">
              {
                listStadiums.map(
                  (stadium:any, index) => (
                    <CardStadium
                      key={index}
                      idStadium={stadium.id}
                      description={stadium.description}
                      numberStadium={index + 1}
                      reservation={false}
                      idUser={stadium.idUser}
                      name={stadium.name}
                      typeStadium={stadium.typeStadium} 
                      modeAllStadium={true}
                    />
                  )
                )
              }
            </div> 
          </div>
      }
    </>
  )
}