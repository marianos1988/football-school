import { NextResponse } from "next/server";


export async function POST( request:Request ) {
    
    const data = await request.json();



    let objectRegister: any = {
                
        method : "POST",
        body : JSON.stringify(
          data
          ),
        headers : {
            "Content-type" : "application/json"
        } 
      }
    
    
      try {
        
        const JSONLogin = await fetch("http://localhost:3000/Auth/Register/",objectRegister);
        const dataParameters = await JSONLogin.json();
        return NextResponse.json(data);

      } catch {
            //Error mesagge
      }



}