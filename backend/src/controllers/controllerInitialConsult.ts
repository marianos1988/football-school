import { parametersConsultStadium } from "../panelParameters/parameters";
import { parametersStadiums } from "../panelParameters/parameters";
import { parametersReservationList } from "../panelParameters/parameters";
import pool from "../bd/bdConfig";
import utils from "./utils";

const InitialConsult = async (req:any, res:any) => {
    const data = await req.body;
    const { idStadium, numberStadium } = data;

    
      const newListStadiums:any = parametersStadiums.listStadiums[0];

    for(let stadium of newListStadiums) {
        if( idStadium === stadium.idStadium ) {

        const selectParameters = {
            idStadium: stadium.idStadium,
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
 
        }
    }
    res.json({
        list: parametersStadiums.listStadiums[0],
        consult: parametersConsultStadium[0]
    })


}

const getInitialConsult = async (req: any, res: any) => {

    try {
        
        /*
          id: 55,
  id_stadium: 6,
  id_user: 1,
  cliente: 'Juancito',
  telefono: '1545689054',
  fecha_ingreso: 2024-10-25T03:00:00.000Z,
  fecha_reserva: 2024-10-28T03:00:00.000Z,
  hora_reserva: 2024-10-28T18:30:00.000Z,
  email: 'nicolas@asd.com',
  senia: 17000


  {
      idReserve: 0,
      idStadium: 0,
      idUser: 0,
      nameClient: "",
      phone: "",
      date: "",
      time: "",
      email: "",
      cash: 0
    }
        */
        const getDateToday = utils.getFullDate(new Date)
        const parameters = parametersConsultStadium[0];
        const query = `SELECT id_stadium, id, id_user, cliente, telefono, fecha_reserva, hora_reserva, email, senia FROM reservas WHERE fecha_reserva = "${getDateToday}" AND id_user = ${parameters.idUser} AND id_stadium = ${parameters.idStadium}`;




        pool.query(query, async (err,resu) => {

            if(err) {
                throw err;
            }

            if(resu < 1)  {
                res.json("Sin reservas")
            } else {

                const reserves = await resu;
                let reserve:{
                    idReserve: number,
                    idStadium: number,
                    idUser: number,
                    nameClient: string,
                    phone: string,
                    date: string,
                    time: string,
                    email: string,
                    cash: number
                };

                let listReserves:any = [];


                for(let index in reserves) {
                    reserve = {
                        idReserve: reserves[index].id,
                        idStadium: reserves[index].id_stadium,
                        idUser: reserves[index].id_user,
                        nameClient: reserves[index].cliente,
                        phone: reserves[index].telefono,
                        date: reserves[index].fecha_reserva,
                        time: reserves[index].hora_reserva,
                        email: reserves[index].email,
                        cash: reserves[index].senia
                    }
                    listReserves.push(reserve)
                    
                }

               parametersReservationList.push(listReserves);
               parametersReservationList.shift();

                const finalParameters = {
                    stadium:  parametersConsultStadium[0],
                    allStadium: parametersStadiums.listStadiums[0],
                    listReserves: parametersReservationList[0]
                  }

                res.json(finalParameters)
            }
        });


    } catch (error) {
        
    }
}

export default {
    InitialConsult,
    getInitialConsult
}