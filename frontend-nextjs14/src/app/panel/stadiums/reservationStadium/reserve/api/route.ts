import { errorsReserveStadium } from "@/errors/error";
import { FormReservationInitial } from "@/types/TypesFormReservation";
import { NextResponse } from "next/server";


const isOnlyNumber = (texto:any) => {
  // Expresión regular para verificar si el texto contiene solo números
  let regex = /^[0-9]+$/;
  
  // Usamos el método test de la expresión regular para verificar si coincide con el texto
  if (regex.test(texto)) {
    return true; // El texto contiene solo números
  } else {
    return false; // El texto contiene otros caracteres además de números
  }
}


const validationFormReservation = (object:FormReservationInitial) => {

  const todayDate = new Date();
  const dateObject = new Date(object.date);
  dateObject.setDate(dateObject.getDate()+1);


  if(object.nameClient.length < 4) {

    return {validation: false, error: errorsReserveStadium.errorNameClient};
  }
  else if(!isOnlyNumber(object.phone)) {

    return {validation: false, error: errorsReserveStadium.errorPhone};
  }
  else if(object.phone.length < 8) {
    return {validation: false, error: errorsReserveStadium.errorNameClient};
  }
  else if(object.date === "") {

    return {validation: false, error: errorsReserveStadium.errorDate};
  }
  else if(dateObject < todayDate) {

    return {validation: false, error: errorsReserveStadium.errorBeforeDate};
  }
  else if(object.time === "") {

    return {validation: false, error: errorsReserveStadium.errorTime};
  }
  else if(!isOnlyNumber(object.cash) || object.cash === "0" || object.cash === 0) {

    return {validation: false, error: errorsReserveStadium.errorCash};
  }
  else {
    return true;
  }

}

export async function POST(request: Request) {

  const newReserve = await request.json();
  
  const validation = validationFormReservation(newReserve);

  if(validation) {

      let objectReserve = {
                  
        method : "POST",
        body : JSON.stringify(
          newReserve
          ),
        headers : {
            "Content-type" : "application/json"
        }
      }
    
      try {
        
        const JSONLogin = await fetch("http://localhost:3000/Stadiums/Reserve/",objectReserve);
        const dataParameters = await JSONLogin.json();
        return NextResponse.json(validation);
    } catch {

    }
  }
}