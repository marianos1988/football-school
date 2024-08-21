import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const data = await request.json();

  let objectLogin = {
                
    method : "POST",
    body : JSON.stringify(
      data
      ),
    headers : {
        "Content-type" : "application/json"
    }
  }
  
  const JSONLogin = await fetch("http://localhost:3000/",objectLogin);
  const user = await JSONLogin.json();
  console.log(user)

  return NextResponse.json(user)
}