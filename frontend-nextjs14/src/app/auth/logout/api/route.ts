import { parametersLogin } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function GET() {

  const newLogin = {
    isLogin: false,
    id: 0,
    username: ""
  }


  let objectLogin = {
                
    method : "POST",
    body : JSON.stringify(
      newLogin
      ),
    headers : {
        "Content-type" : "application/json"
    }
  }

  try {
    
    const JSONLogin = await fetch("http://localhost:3000/Logout",objectLogin);
    const dataParameters = await JSONLogin.json();

    if(dataParameters) {

      parametersLogin.push(newLogin);
      parametersLogin.shift();
    
      return NextResponse.json(dataParameters)
    } else {
      return NextResponse.json(dataParameters)
    }

  } catch {
    return NextResponse.json(false)
  }

}