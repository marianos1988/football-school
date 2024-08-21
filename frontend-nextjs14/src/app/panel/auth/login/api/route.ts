import { NextResponse } from "next/server";


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
  
    if(user === "Datos incorrectos" || user === "Usuario o clave incorrecta" || user === "No se puede conectar a la base de datos") {
  
      return NextResponse.json(user);
  
   } else if(user.id > 0 && user.username.length > 0) {
  
    // dispatch(setLogin(usuario))
    // navigate("/Home");

    return NextResponse.json("");
   }
  } catch {

  }


  
}