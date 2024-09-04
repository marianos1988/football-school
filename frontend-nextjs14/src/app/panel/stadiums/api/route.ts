import { parametersStadiums } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function GET() {
  

  if((parametersStadiums.listStadiums[0].id === 0) && (parametersStadiums.listStadiums[0].idUser === 0) && (parametersStadiums.listStadiums[0].name === "") && (parametersStadiums.listStadiums[0].description === "") ) {
   
    const response = await fetch("http://localhost:3000/Stadiums/AllStadiums/");
    const listStadiums = await response.json();


  
    parametersStadiums.listStadiums.shift();
    parametersStadiums.listStadiums.push(listStadiums);

    return NextResponse.json(parametersStadiums.listStadiums[0])

  } else {


    return NextResponse.json(parametersStadiums.listStadiums[0]);
  }

}
