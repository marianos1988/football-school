import utils from "./utils";
import pool from "../bd/bdConfig";

const editReserve = async (req:any, res:any) => {
    const id = await req.body;

    const parseID = utils.parseSelectEditReserve(id.id);
    if(parseID === "Reserva incorrecta") {
        res.json( parseID);
    } else {

            let query = `SELECT * FROM reservas WHERE id = "${parseID}"`;
            pool.query(query, ((err,resu) =>{

                try {
                    if(err) throw err;

                    if(resu < 1) {
                        res.json("La reserva no existe");
                    } else {
                        let object = {
                            id: resu[0].id,
                            idStadium: resu[0].id_stadium,
                            nameClient: resu[0].cliente,
                            phone: resu[0].telefono,
                            date: resu[0].fecha_reserva,
                            time: resu[0].hora_reserva,
                            cash: resu[0].senia  
                        }

                        res.json(object);

                    }
                } catch (error) {
                    res.json("No se puede conectar a la base de datos");
                }

            }))

    }

} 

export default {
    editReserve
} 