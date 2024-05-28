import pool from "../bd/bdConfig";
import utils from "./utils";

const getConsultStadiumToday = async (req:any, res:any) =>{
    const todayDate = utils.getFullDate(new Date);
    let array:any[] = [];

try {
    const query = `
    SELECT id, id_stadium, cliente, telefono, fecha_reserva, hora_reserva, senia FROM reservas WHERE fecha_reserva = "${todayDate}";
    `;
    pool.query(query,(err,resu)=>{

        if (err) {
            console.log(err);
            throw err;
        }
        resu.forEach((element: { id: number; id_stadium: number; cliente: string; telefono: string; fecha_reserva:   string; hora_reserva: string; senia: number; }) => {
        let object = {
            id: element.id,
            idStadium: element.id_stadium,
            nameCliente: element.cliente,
            phone: element.telefono,
            reserveDate: element.fecha_reserva,
            reserveTime: element.hora_reserva,
            cash: element.senia  
        }
        array.push(object)
        });
        console.log(array);
        res.json(array);
    });


} catch (error) {
    console.log(error)
}


}

const consultStadium = async (req: any, res: any) => {

const data = req.body;
console.log(data);
}

export default {
    consultStadium,
    getConsultStadiumToday
}