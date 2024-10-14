import { NextResponse } from "next/server";
import { parametersConsultStadium } from "@/panelParameters/parameters";
import { parametersStadiums } from "@/panelParameters/parameters";



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



    } catch {

      return NextResponse.json(false);
    }

  }
  const newListStadiums:any = parametersStadiums.listStadiums[0];

  for(let stadium of newListStadiums) {
    if( idStadium === stadium.idStadium ) {

      const selectParameters = {
        idStadium: stadium.idStadium,
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

      

      return NextResponse.json(true)

      //SEtear errores!!!!
    }
  }



 return NextResponse.json(false);
}

export async function GET() {

  if(parametersConsultStadium[0].idStadium === 0 && parametersConsultStadium[0].idUser === 0 && parametersConsultStadium[0].typeStadium === 0 && parametersConsultStadium[0].typeFloor === "" && parametersConsultStadium[0].name === "" && parametersConsultStadium[0].description == "") {

    try {
       const response = await fetch("http://localhost:3000/Stadiums/InitialConsult/");
       const consult =  await response.json();
      console.log("este es el get")
       console.log(consult)
    } catch {
      // DEvolver cartel de error
    }
  }
  const parameters = parametersConsultStadium[0];

  ///SETEARLO EN EL BACKEND!!!! 


 return NextResponse.json(parameters);
}



