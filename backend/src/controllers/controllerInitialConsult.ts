import { parametersConsultStadium } from "../panelParameters/parameters";
import { parametersStadiums } from "../panelParameters/parameters";
import { parametersReservationList } from "../panelParameters/parameters";
import { errorsConsultReserves, errorsGenerals } from "../errors/error";
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
        

        const getDateToday = utils.getFullDate(new Date)
        const parameters = parametersConsultStadium[0];
        const query = `SELECT id_stadium, id, id_user, number_stadium, cliente, telefono, fecha_reserva, hora_reserva, email, senia FROM reservas WHERE fecha_reserva = "${getDateToday}" AND id_user = ${parameters.idUser} AND id_stadium = ${parameters.idStadium}`;


        pool.query(query, async (err,resu) => {

            if(err) {
                throw err;
            }

            if(resu < 1)  {
                res.json({
                    isThereError: true,
                    message: errorsConsultReserves.errorwithoutReservation,
                    stadium:  parametersConsultStadium[0],
                    allStadium: parametersStadiums.listStadiums[0],
                    listReserves: []
                })
            } else {

                const reserves = await resu;
                let reserve:{
                    idReserve: number,
                    idStadium: number,
                    idUser: number,
                    numberStadium:number,
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
                        numberStadium: reserves[index].number_stadium,
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
                    isThereError: false,
                    mesasage: "",
                    stadium:  parametersConsultStadium[0],
                    allStadium: parametersStadiums.listStadiums[0],
                    listReserves: parametersReservationList[0]
                }

                res.json(finalParameters)
            }
        });


    } catch {
        const finalParameters = {
            isThereError: true,
            mesasage: errorsGenerals.errorConnection,
            stadium:  parametersConsultStadium[0],
            allStadium: parametersStadiums.listStadiums[0],
            listReserves: parametersReservationList[0]
        }

        res.json(finalParameters)
    }
}

export default {
    InitialConsult,
    getInitialConsult
}