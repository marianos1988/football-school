import { NextResponse } from "next/server";
import { parametersLogin, parametersStadiums } from "@/panelParameters/parameters";
import { errorsLogin } from "@/errors/error";

export async function GET() {
 
  try{
    
    
    if(parametersLogin[0].isLogin) {
      return NextResponse.json(true);
    } else {
      const data = await fetch("http://localhost:3000/Auth/Login/");
      const validation = await data.json();

      return NextResponse.json(validation);
    }
  } catch {

    return NextResponse.json(false);
  }
}

export async function POST(request: Request) {
  
  const data = await request.json();

  let objectLogin: any = {
                
    method : "POST",
    body : JSON.stringify(
      data
      ),
    headers : {
        "Content-type" : "application/json"
    } 
  }


  try {
    
    const JSONLogin = await fetch("http://localhost:3000/Auth/Login/",objectLogin);
    const dataParameters = await JSONLogin.json();

    
    if(dataParameters.isThereError) {

      return NextResponse.json(dataParameters);

    } else {
      const newLogin = {
        isLogin: true,
        idUser: dataParameters.data.login.idUser,
        email: dataParameters.data.login.email
      }
  
      parametersLogin.push(newLogin);
      parametersLogin.shift();
  
  
      const newStadiums = dataParameters.data.stadiums
      const countStadiums = dataParameters.data.stadiums.length;
      
      
      parametersStadiums.count.push(countStadiums);
      parametersStadiums.count.shift();
  
      let listStadiums: any = []
      for(let index in newStadiums){
        let stadium = newStadiums[index];
      
        listStadiums.push(stadium);
      }
  
      parametersStadiums.listStadiums.push(listStadiums)
      parametersStadiums.listStadiums.shift();
      
  
      return NextResponse.json({
  
          isThereError: false, 
          message: "",
          data: "",
          token: dataParameters.token
      });
    }

   
  } catch {

     return NextResponse.json({

      isThereError: false, 
      message: errorsLogin.errorConnection,
      data: ""
  })

  }


  
}