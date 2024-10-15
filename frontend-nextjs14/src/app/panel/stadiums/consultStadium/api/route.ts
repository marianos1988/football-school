import { NextResponse } from "next/server";
import { parametersConsultStadium } from "@/panelParameters/parameters";
import { parametersStadiums } from "@/panelParameters/parameters";
import { errorsWarningPoster } from "@/errors/error";


export async function POST(request:Request) {


  const { data } = await request.json();
  const { idStadium, numberStadium } = data;

  const { listStadiums } = parametersStadiums;
 
  if(listStadiums[0].id === 0 && listStadiums[0].idUser === 0 && listStadiums[0].typeStadium === 0 && listStadiums[0].name === "" && listStadiums[0].typeFloor === "" && listStadiums[0].description === "") {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
          idStadium,
          numberStadium
          
      }
        ),
      headers : {
          "Content-type" : "application/json"
      } 
    }

    try {
 
      const response = await fetch(`http://localhost:3000/Stadiums/InitialConsult/`,object)
      const parameters = await response.json();


      parametersStadiums.listStadiums.push(parameters.list);
      parametersStadiums.listStadiums.shift();
 

      parametersConsultStadium.push(parameters.consult);
      parametersConsultStadium.shift();

      
      return NextResponse.json({thereIsError: false})


      
      // Armar un algoritmo que vuelva a setear el datopara generar la nueva consulta

    } catch {

      return NextResponse.json({
        thereIsError: true, 
        tittle: errorsWarningPoster.errorConection.tittle,
        subtittle: errorsWarningPoster.errorConection.subtittle
       })
    }

  } else {

      const newListStadiums:any = listStadiums[0];

      for(let stadium of newListStadiums) {


        if( idStadium === stadium.id ) {
    
          const selectParameters = {
            idStadium: stadium.id,
            idUser: stadium.idUser,
            typeStadium: stadium.typeStadium,
            typeFloor: stadium.typeFloor,
            name: stadium.name,
            description: stadium.description,
            allStadium: false,
            numberStadium: numberStadium
          } 
    
          parametersConsultStadium.push(selectParameters)
          parametersConsultStadium.shift();
    
    
    
          return NextResponse.json(false)
    
    
        }
      }
  }





 return NextResponse.json(false);
}

export async function GET() {

  if(parametersConsultStadium[0].idStadium === 0 && parametersConsultStadium[0].idUser === 0 && parametersConsultStadium[0].typeStadium === 0 && parametersConsultStadium[0].typeFloor === "" && parametersConsultStadium[0].name === "" && parametersConsultStadium[0].description == "") {

    try {
       const response = await fetch("http://localhost:3000/Stadiums/InitialConsult/");
       const consult =  await response.json();

       parametersConsultStadium.push(consult);
       parametersConsultStadium.shift();

    } catch {
      return NextResponse.json(false);
    }
  }
  const parameters = parametersConsultStadium[0];

 return NextResponse.json(parameters);
}



