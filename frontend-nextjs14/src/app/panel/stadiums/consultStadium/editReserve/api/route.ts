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

        const response = await fetch(`http://wwww.localhost:3000/Stadiums/Consult/Edit`,object)
        const data = await response.json();

        
    } catch (error) {
        
    }

    //LLega la reserva a editar, falta el correo 

    return NextResponse.json("hola")
}