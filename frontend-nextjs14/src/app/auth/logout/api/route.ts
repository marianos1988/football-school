import { parametersLogin } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function GET() {

  const newLogin = {
    isLogin: false,
    id: 0,
    username: ""
  }
 

  let objectLogout = {
                
    method : "POST",
    body : JSON.stringify(
      newLogin
      ),
    headers : {
        "Content-type" : "application/json"
    }
  }

  try {
    
 
    const JSONLogout = await fetch("http://localhost:3000/Auth/Logout/",objectLogout);
    const dataParameters = await JSONLogout.json();
    console.log(dataParameters)
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