import { NextResponse } from "next/server";

export async function POST(req:Request) {
  
  const getToken = await req.json()
  
  let object = {
                
    method : "POST",
    body : JSON.stringify({
      token: getToken
    }),
    headers : {
        "Content-type" : "application/json"
    }
  }

  const response = await fetch("http://localhost:3000/protected/",object);
  const data = response.json();
  console.log(data)


  return NextResponse.json(true);
}