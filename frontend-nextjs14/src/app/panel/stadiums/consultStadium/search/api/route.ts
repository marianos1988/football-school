import { NextResponse } from "next/server";
import { errorsLogin } from "@/errors/error";

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

    return NextResponse.json(info);

  } catch {

    const object = {
      listReserves: [],
      isThereError: true,
      message: errorsLogin.errorConnection,
    }
    return NextResponse.json(object);
  }



}
