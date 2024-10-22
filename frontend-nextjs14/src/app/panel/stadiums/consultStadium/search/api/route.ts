import { NextResponse } from "next/server";

export async function POST(request:Request) {
  const data = await request.json();

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

  const response = await fetch(`http://localhost:3000/Stadiums/Consult/`,object)

  return NextResponse.json("")
}