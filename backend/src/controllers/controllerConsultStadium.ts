import pool from "../bd/bdConfig";
import utils from "../controllers/utils";

const consultStadium = async (req: any, res: any) => {

    const data = await req.body;


    let array:any[] = [];

    try {
        let query: string;

        if(data.allStadium) {
            query = `
                SELECT id, id_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${data.date}";
            `;
        } else {
            query = `
                SELECT id, id_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${data.date}" AND id_stadium = "${data.idStadium}";
            `;
        }

        pool.query(query,(err,resu)=>{
    
            if (err) {
                console.log(err);
                throw err;
            }

            resu.forEach((element: { id: number; id_stadium: number; cliente: string; telefono: string; fecha_reserva:   string; hora_reserva: string; senia: number; }) => {

                let newTime = new Date(element.hora_reserva)
                const finalTime = `${utils.addCero(newTime.getHours())}:${utils.addCero(newTime.getMinutes())}`;
                const newDate = new Date(element.fecha_reserva);
                const finalDate = `${utils.addCero(newDate.getDate())}-${utils.addCero(newDate.getMonth()+1)}-${newDate.getFullYear()}`; 

                let object = {
                    id: element.id,
                    idStadium: element.id_stadium,
                    nameClient: element.cliente,
                    phone: element.telefono,
                    date: finalDate,
                    time: finalTime,
                    cash: element.senia  
                }
            array.push(object)
            });

            res.json(array);
        });
    
    
    } catch (error) {
        console.log(error)
    }

}

export default {
    consultStadium,

}