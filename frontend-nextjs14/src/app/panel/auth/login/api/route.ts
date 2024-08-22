import { NextResponse } from "next/server";
import { parametersLogin } from "@/panelParameters/parameters";
import { errorsLogin } from "@/errors/error";


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

  try {
    
    const JSONLogin = await fetch("http://localhost:3000/",objectLogin);
    const user = await JSONLogin.json();
    console.log(user)
  
    if(user === errorsLogin.errorInfo || user === errorsLogin.errorUserAndPass || user === errorsLogin.errorConnection) {
  
      return NextResponse.json(user);
  
   } else if(user.id > 0 && user.username.length > 0) {
    
    const newLogin = {
      isLogin: true,
      id: user.id,
      username: user.username
    }

    parametersLogin.push(newLogin);


    return NextResponse.json("");
   }
  } catch {
    
    return errorsLogin.errorConnection;
  }


  
}