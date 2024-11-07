import { NextResponse } from "next/server";
import { errorsLogin } from "@/errors/error";
import { parametersReservationList } from "@/panelParameters/parameters";

export async function POST(request:Request) {

  const data = await request.json();

  try {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
        data
      }
        ), 
      headers : {
          "Content-type" : "application/json"
      } 
    }
  
    const response = await fetch(`http://localhost:3000/Stadiums/Consult/`,object); 
    const info = await response.json();
    if(info.isThereError) {

      return NextResponse.json(info);

    } else {

      parametersReservationList.push(info.listReserves);
      parametersReservationList.shift();
      console.log(parametersReservationList[0])

      return NextResponse.json(info);
    }


  } catch { 

    const object = {
      listReserves: [],
      isThereError: true,
      message: errorsLogin.errorConnection,
    }
    return NextResponse.json(object);
  }



}
