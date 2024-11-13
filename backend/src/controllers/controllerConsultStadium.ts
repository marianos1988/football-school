import pool from "../bd/bdConfig";
import utils from "../controllers/utils";
import { errorsGenerals } from "../errors/error";
import { errorsConsultReserves } from "../errors/error";
import { parametersReservationList } from "../panelParameters/parameters";


const consultStadium = async (req: any, res: any) => {

    const { data } = await req.body;
    const dataParse = utils.parseConsultStadium(data);

    if(dataParse.validate) {

        try {

            let array:any[] = [];
            let query: string;
    
            if(dataParse.data.allStadiums) {
                query = `
                    SELECT id, id_stadium, number_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${data.date}" ORDER BY hora_reserva;
                `;
            } else {
                query = `
                    SELECT id, id_stadium, number_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${data.date}" AND id_stadium = "${data.idStadium}" ORDER BY hora_reserva;;
                `;
            }
    
            pool.query(query, async (err,resu)=>{
        
                if (err) {
                    console.log(err);
                    throw err;
                }

                const resul = await resu;
     
                resul.forEach((element: { id: number; id_stadium: number; number_stadium:number, cliente: string; telefono: string; fecha_reserva:   string; hora_reserva: string; senia: number; }) => {
    
                    let newTime = new Date(element.hora_reserva)
                    const newDate = new Date(element.fecha_reserva);
    
                    let object = {
                        idReserve: element.id,
                        idStadium: element.id_stadium,
                        numberStadium: element.number_stadium,
                        nameClient: element.cliente,
                        phone: element.telefono,
                        date: utils.getFullDate(newDate),
                        time: utils.getFullTime(newTime),
                        cash: element.senia  
                    }
                array.push(object)
                });

                if(array.length > 0) {
                    const object = {
                        listReserves: array,
                        isThereError: false,
                        message: "",
                    }
                    res.json(object);
                }
                else {


                    const object = {
                        listReserves: array,
                        isThereError: true,
                        message: errorsConsultReserves.errorwithoutReservation,
                    }
                    res.json(object);
                }

            });
        
        } catch (error) {    

            const object = {
                listReserves: [],
                isThereError: true,
                message: errorsGenerals.errorConnection,

            }
            res.json(object);
        }
    } else {
        const object = {

            listReserves: [],
            isThereError: true,
            message: errorsGenerals.errorData,

        }
        res.json(object);
    }



}

export default {
    consultStadium,

}