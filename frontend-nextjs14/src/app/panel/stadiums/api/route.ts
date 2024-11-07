import { parametersStadiums } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";
import { errorsWarningPoster } from "@/errors/error";

export async function GET() {
  

    try {
      const response = await fetch("http://localhost:3000/Stadiums/AllStadiums/");
      const listStadiums = await response.json();
  
      parametersStadiums.listStadiums.push(listStadiums);
      parametersStadiums.listStadiums.shift();
  
      return NextResponse.json(parametersStadiums.listStadiums[0])

    } catch {
      return NextResponse.json({thereIsError: true, tittle: errorsWarningPoster.errorConection.tittle, subtittle: errorsWarningPoster.errorConection.subtittle})
    }

}
