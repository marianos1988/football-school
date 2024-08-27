"use client"
import { useSelector } from "react-redux";
import "@/styles/Stadiums.css"
import { PropertiesHome } from "@/types/TypesHome";
import { CardStadium } from "@/components/CardStadium";
import { useEffect } from "react";
import { useUtils } from "@/hooks/useUtils";
import { useRouter } from "next/navigation";
import { parametersStadiums } from "@/panelParameters/parameters";

export default function Stadiums() {

  
  const { checkLogin } = useUtils();
  const route = useRouter();
  const { listStadiums, count } = parametersStadiums;

  

  const checkLoginPage = async () =>{

    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    }
  }
  useEffect(()=>{
    checkLoginPage()
  });
  
  const { blur }= useSelector((state:PropertiesHome) =>  state.properties);
  const { section }= useSelector((state:PropertiesHome) =>  state.properties);
  console.log(listStadiums)

  // const canchas = [{id: 1, reservation: false}, {id: 2, reservation: false}, {id: 3, reservation: false}]
  return (
    <>
      {
        (section === "stadiums") && (
          <div className={(blur) ? ("container-stadiums active-blur") : ("container-stadiums")}>
            <h1>Mis Canchas</h1>
            <div className="list-stadiums">
              {
                listStadiums.map(
                  (stadium) => (
                    <CardStadium
                      key={count.length}
                      id= {stadium.id}
                      description={stadium.description}
                      numberStadium={count.length}
                      reservation= {false}
                      id_user={stadium.id_user}
                      name={stadium.name}
                      typeStadium={stadium.typeStadium} 
                    />
                  )
                )
              }
              {/* <CardStadium
                id={1}
                reservation={false}
              />
              <CardStadium 
                id={2}
                reservation={false}
              />
              <CardStadium 
                id={3}
                reservation={false}
              />
              <CardStadium 
                id={4}
                reservation={false}
              /> */}
            </div> 
          </div>
        )
      }
    </>
  )
}