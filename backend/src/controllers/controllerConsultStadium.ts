import pool from "../bd/bdConfig";
import utils from "../controllers/utils";

const consultStadium = async (req: any, res: any) => {

    const data = await req.body;

    let array:any[] = [];

    try {
        const query = `
            SELECT id, id_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${data.date}";
        `;
        pool.query(query,(err,resu)=>{
    
            if (err) {
                console.log(err);
                throw err;
            }

            resu.forEach((element: { id: number; id_stadium: number; cliente: string; telefono: string; fecha_reserva:   string; hora_reserva: string; senia: number; }) => {

                let newTime = new Date(element.hora_reserva)
                const finalTime = `${newTime.getHours()}:${utils.addCero(newTime.getMinutes())}Hs`;

                let object = {
                    id: element.id,
                    idStadium: element.id_stadium,
                    nameClient: element.cliente,
                    phone: element.telefono,
                    reserveDate: element.fecha_reserva,
                    reserveTime: finalTime,
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