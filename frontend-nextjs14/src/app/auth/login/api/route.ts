import { NextResponse } from "next/server";
import { parametersLogin, parametersStadiums } from "@/panelParameters/parameters";
import { errorsLogin } from "@/errors/error";

export async function GET() {
  const parametersLoginActive = parametersLogin;

  return NextResponse.json(parametersLoginActive);
}

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
    const dataParameters = await JSONLogin.json();

  
    if(dataParameters === errorsLogin.errorInfo || dataParameters === errorsLogin.errorUserAndPass || dataParameters=== errorsLogin.errorConnection) {
  
      return NextResponse.json(dataParameters);
  
   } else if(dataParameters.login.id > 0 && dataParameters.login.username.length > 0) {
    
    const newLogin = {
      isLogin: true,
      id: dataParameters.login.id,
      username: dataParameters.login.username
    }

    parametersLogin.push(newLogin);
    parametersLogin.shift();

    const newStadiums = dataParameters.stadiums
    const countStadiums = dataParameters.stadiums.length;
    
    parametersStadiums.count.push(countStadiums);
    parametersStadiums.count.shift();



    for(let stadium of newStadiums){
      parametersStadiums.listStadiums.push(stadium);
    }

    parametersStadiums.listStadiums.shift();

   

    return NextResponse.json("");

   } 
  } catch {
    
    return errorsLogin.errorConnection;
  }


  
}