"use client"
import "@/styles/Stadiums.css"
import { CardStadium } from "@/components/CardStadium";
import { useEffect, useState } from "react";
import { useUtils } from "@/hooks/useUtils";
import { useRouter } from "next/navigation";



export default function Stadiums() {

  const [listStadiums, setListStadiums] = useState([]);
  const { checkLogin } = useUtils();
  const route = useRouter();



  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    } else {

      try {

        const response = await fetch("http://localhost:3001/panel/stadiums/api/");
        const newListStadiums = await response.json();
        setListStadiums(newListStadiums);

        
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
            <div className="list-stadiums">
              {
                listStadiums.map(
                  (stadium:any, index) => (
                    <CardStadium
                      key={stadium.id}
                      id= {stadium.id}
                      description={stadium.description}
                      numberStadium={index+1}
                      reservation= {false}
                      id_user={stadium.id_user}
                      name={stadium.name}
                      typeStadium={stadium.typeStadium} 
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