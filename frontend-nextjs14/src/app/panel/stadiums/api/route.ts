import { parametersStadiums } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function GET() {
  
  const parameters = parametersStadiums;
  
  // if(!(parametersStadiums.listStadiums[0].id === 0) || !(parametersStadiums.listStadiums[0].idUser === 0) || !(parametersStadiums.listStadiums[0].name === "") || !(parametersStadiums.listStadiums[0].description === "") ) {

  //   return NextResponse.json(parameters);

  // } else {
    const response = await fetch("http://localhost:3000/Stadiums/AllStadiums/");
    const listStadiums = await response.json();
    console.log(listStadiums);

    return NextResponse.json(listStadiums)
  // }

}
