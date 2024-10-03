import { NextResponse } from "next/server";
import { parametersConsultaStadium } from "@/panelParameters/parameters";
import { parametersStadiums } from "@/panelParameters/parameters";
import { ParametersStadiums } from "@/types/TypeParameters";
import { NewListStadiums } from "@/types/TypesConsultStadium";


export async function POST(request:Request) {


  const { data } = await request.json();
  const idStadium = data;
  const { listStadiums } = parametersStadiums;

  if(listStadiums[0].id === 0 && listStadiums[0].idUser === 0 && listStadiums[0].typeStadium === 0 && listStadiums[0].name === "" && listStadiums[0].typeFloor === "" && listStadiums[0].description === "") {

    try {
      const response = await fetch(`http://localhost:3000/Stadiums/AllStadiums`);
      const list = await response.json();
      
      parametersStadiums.listStadiums.push(list);
      parametersStadiums.listStadiums.shift();

      console.log(parametersStadiums.listStadiums[0]);


    } catch {

    // Chequear error!!!
    }

  }
  const newListStadiums:any = parametersStadiums.listStadiums[0];

  for(let stadium of newListStadiums) {
    if( idStadium === stadium.idStadium ) {
      return NextResponse.json(stadium)
    }
  }
    //buscar la cancha con el id


 return NextResponse.json("No existe el estadio");
}

export async function GET() {

  const parameters = parametersConsultaStadium;

 return NextResponse.json(parameters);
}