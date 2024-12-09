import { parametersReservationStadium, parametersStadiums } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";
import { errorsWarningPoster } from "@/errors/error";

export async function POST(Request:Request) {
    const newID = await Request.json();


    let object = {
                
      method : "POST",
      body : JSON.stringify({
          newID 
      }
        ),
      headers : {
          "Content-type" : "application/json"
      }
    }

    try {

      const response = await fetch("http://localhost:3000/Stadiums/initialReserve/",object); 
      const initialReserve = await response.json();

      parametersReservationStadium.push(initialReserve);
      parametersReservationStadium.shift();
      
      return NextResponse.json(parametersReservationStadium[0]);


    } catch {

      return NextResponse.json({
        thereIsError: true, 
        tittle: errorsWarningPoster.errorConection.tittle,
        subtittle: errorsWarningPoster.errorConection.subtittle
       });

    }



}

export async function GET() {
    const parameters = parametersReservationStadium[0];

    if(parameters.idStadium === 0 && parameters.idUser === 0 && parameters.numberStadium === 0 && parameters.name === "") {
      try {
        const response = await fetch("http://localhost:3000/Stadiums/initialReserve/"); 
        const initialReserve = await response.json();
        parametersReservationStadium.push(initialReserve);
        parametersReservationStadium.shift();


        return NextResponse.json(parametersReservationStadium[0]);
      } catch {

        return NextResponse.json({
          
          thereIsError: true, 
          tittle: errorsWarningPoster.errorConection.tittle,
          subtittle: errorsWarningPoster.errorConection.subtittle
         });

      }
    }

    return NextResponse.json(parameters)
}