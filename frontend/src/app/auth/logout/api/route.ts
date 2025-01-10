import { parametersLogin } from "@/panelParameters/parameters";
import { errorsLogin } from "@/errors/error";
import { NextResponse } from "next/server";

export async function GET() {

  const newLogin = {
    isLogin: false,
    idUser: 0,
    username: ""
  }
 

  try {
    
 
    const JSONLogout = await fetch("http://localhost:3000/Auth/Logout/");
    const dataParameters = await JSONLogout.json();

    if(dataParameters) {

      parametersLogin.push(newLogin);
      parametersLogin.shift();
    
      return NextResponse.json(dataParameters)
    } else {

      return NextResponse.json(dataParameters)
    }

  } catch {
    console.log(errorsLogin.errorBackend)
    return NextResponse.json(false)
  }

}