import { NextResponse } from "next/server";
import { parametersConsultStadium } from "@/panelParameters/parameters";
import { parametersStadiums } from "@/panelParameters/parameters";



export async function POST(request:Request) {


  const { data } = await request.json();
  const { idStadium, numberStadium } = data;

  const { listStadiums } = parametersStadiums;

  if(listStadiums[0].id === 0 && listStadiums[0].idUser === 0 && listStadiums[0].typeStadium === 0 && listStadiums[0].name === "" && listStadiums[0].typeFloor === "" && listStadiums[0].description === "") {

    try {
      const response = await fetch(`http://localhost:3000/Stadiums/AllStadiums`);
      const list = await response.json();
      
      parametersStadiums.listStadiums.push(list);
      parametersStadiums.listStadiums.shift();

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

      console.log(parametersConsultStadium)

 
      return NextResponse.json(true)
    }
  }



 return NextResponse.json(false);
}

export async function GET() {

  const parameters = parametersConsultStadium[0];


 return NextResponse.json(parameters);
}