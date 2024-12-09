import { NextResponse } from "next/server";
import { parametersLogin } from "@/panelParameters/parameters";
export async function POST(request:Request) {

    const rowToEdit = await request.json();
    

    const addIdUser = {
        idReserve: rowToEdit.idReserve,
        idStadium: rowToEdit.idStadium,
        idUser: parametersLogin[0].idUser
    }
    try {
        console.log(parametersLogin[0])
        let object = {
                
            method : "POST",
            body : JSON.stringify({
                addIdUser
            }
              ),
            headers : {
                "Content-type" : "application/json"
            }
          }

        const response = await fetch(`http://localhost:3000/Stadiums/Consult/Edit/`,object)
        const data = await response.json();
        //   console.log(data)
        return NextResponse.json("hola")
    } catch (error) {
        return NextResponse.json("hola")
    }



}