import { NextResponse } from "next/server";
import { parametersConsultStadium } from "@/panelParameters/parameters";
import { parametersStadiums } from "@/panelParameters/parameters";
import { parametersReservationList } from "@/panelParameters/parameters";
import { errorsLogin, errorsWarningPoster } from "@/errors/error"; 


export async function POST(request:Request) { 


  const { data } = await request.json();
  const { idStadium, numberStadium } = data;

  const { listStadiums } = parametersStadiums;
  
  let findedStadium = false;

  const newListStadiums:any = listStadiums;

  for(let stadium of newListStadiums) {

    if( idStadium === stadium.id ) { 

      const selectParameters = {
        idStadium: stadium.id,
        idUser: stadium.idUser,
        typeStadium: stadium.typeStadium,
        typeFloor: stadium.typeFloor,
        name: stadium.name,
        description: stadium.description,
        allStadium: false,
        numberStadium: numberStadium
      } 

      parametersConsultStadium.push(selectParameters)
      parametersConsultStadium.shift();

      findedStadium = true;

      return NextResponse.json({
        thereIsError: false, 
        tittle: "",
        subtittle: ""
       })

    }
  }

  if(!findedStadium) {

    let object = {
                
      method : "POST",
      body : JSON.stringify({
          idStadium, 
          numberStadium
          
      }
        ), 
      headers : {
          "Content-type" : "application/json"
      } 
    }

    try {
 
      const response = await fetch(`http://localhost:3000/Stadiums/InitialConsult/`,object)
      const parameters = await response.json();


      if(parameters.isThereError){

        return NextResponse.json({
          isThereError: true, 
          tittle: "Error",
          subtittle: parameters.message
         })
      } else {
        parametersStadiums.listStadiums.push(parameters.list);
        parametersStadiums.listStadiums.shift();
  
  
        parametersConsultStadium.push(parameters.consult);
        parametersConsultStadium.shift();
  
        return NextResponse.json({
          isThereError: false, 
          tittle: "",
          subtittle: ""
         })
      }
  
} catch {

  return NextResponse.json({
    thereIsError: true, 
    tittle: errorsWarningPoster.errorConection.tittle,
    subtittle: errorsWarningPoster.errorConection.subtittle
   })}

}

}
 
export async function GET() {


    try {
          const response = await fetch("http://localhost:3000/Stadiums/InitialConsult/");
          const consult =  await response.json();


          parametersReservationList.push(consult.listReserves)
          parametersReservationList.shift();

        
          const parameters = {
            stadium: consult.stadium,
            allStadium: consult.allStadium,
            listReserves: parametersReservationList[0]
          };
          
          if((consult.isThereError) && (consult.listReserves.length === 0)) {

            return NextResponse.json({
              isThereError: true,
              message: consult.message,
              stadium:  parameters.stadium,
              allStadium: parameters.allStadium,
              listReserves: parameters.listReserves
            });
          }

         return NextResponse.json(parameters);

    } catch {
      return NextResponse.json({
        isThereError: true,
        message: errorsLogin.errorConnection,
        stadium:  parametersConsultStadium[0],
        allStadium: parametersStadiums.listStadiums[0],
      });
    }
}



