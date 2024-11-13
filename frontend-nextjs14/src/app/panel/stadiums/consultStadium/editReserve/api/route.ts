import { NextResponse } from "next/server";

export async function POST(request:Request) {

    const rowToEdit = await request.json();
    
    try {
        
        let object = {
                
            method : "POST",
            body : JSON.stringify({
                rowToEdit
            }
              ),
            headers : {
                "Content-type" : "application/json"
            }
          }

        const response = await fetch(`http://localhost:3000/Stadiums/Consult/Edit/`,object)
        const data = await response.json();

        return NextResponse.json("hola")
    } catch (error) {
        return NextResponse.json("hola")
    }



}