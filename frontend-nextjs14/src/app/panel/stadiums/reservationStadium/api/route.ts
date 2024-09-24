import { parametersReservationStadium } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function POST(Request:Request) {
    const newID = await Request.json();

  console.log(newID)
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
      console.log(initialReserve)

      //  validar error
      parametersReservationStadium.push(initialReserve);
      parametersReservationStadium.shift();
      

    } catch (error) {
        console.log(error)
    }

     return NextResponse.json(parametersReservationStadium);
}

export function GET() {
    return NextResponse.json(parametersReservationStadium[0])
}