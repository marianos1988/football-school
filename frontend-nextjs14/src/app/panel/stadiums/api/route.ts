import { parametersStadiums } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";
import { errorsWarningPoster } from "@/errors/error";

export async function GET() {
  
  // mejorar el algoritmo
  // if((parametersStadiums.listStadiums[0].id === 0) && (parametersStadiums.listStadiums[0].idUser === 0) && (parametersStadiums.listStadiums[0].name === "") && (parametersStadiums.listStadiums[0].description === "") ) {


    
    try {
      const response = await fetch("http://localhost:3000/Stadiums/AllStadiums/");
      const listStadiums = await response.json();
  
      parametersStadiums.listStadiums.push(listStadiums);
      parametersStadiums.listStadiums.shift();
  
  
  
      return NextResponse.json(parametersStadiums.listStadiums[0])



    } catch {
      return NextResponse.json({thereIsError: true, tittle: errorsWarningPoster.errorConection.tittle, subtittle: errorsWarningPoster.errorConection.subtittle})
    }


  // } else {

  //   return NextResponse.json(parametersStadiums.listStadiums[0]);
  // }

}
