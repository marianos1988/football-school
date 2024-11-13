import utils from "./utils";
import pool from "../bd/bdConfig";
import { parametersInitialEditReserve, parametersEditReserve } from "../panelParameters/parameters";
import { errorsConsultReserves } from "../errors/error";

const editReserve = async (req:any, res:any) => {

    const { rowToEdit } = await req.body; 
    const parseData = utils.parseSelectEditReserve(rowToEdit)




    if(parseData.isThereError) {
        res.json({
            parametersInitialEditReserve: {
                idReserve: parseData.idReserve,
                idUser: parseData.idUser,
                idStadium: parseData.idStadium,
            },
            isThereError: parseData.isThereError,
            Message: parseData.message,
            reserve: {}
            
        });
    } else {

                const newParameters = {
                    idReserve: parseData.idReserve,
                    idStadium: parseData.idStadium,
                    idUser: parseData.idUser
                }
            
                parametersInitialEditReserve.shift()
                parametersInitialEditReserve.push(newParameters);
    

            let query = `SELECT * FROM reservas WHERE id = ${parametersInitialEditReserve[0].idReserve} AND id_stadium = ${parametersInitialEditReserve[0].idStadium} AND id_user = ${parametersInitialEditReserve[0].idUser}`;
            pool.query(query, ((err,resu) =>{

                try {
                    if(err) throw err;

                    if(resu < 1) {
                        res.json({
                            parametersInitialEditReserve: {
                                idReserve: parseData.idReserve,
                                idUser: parseData.idUser,
                                idStadium: parseData.idStadium,
                            },
                            isThereError: parseData.isThereError,
                            Message: errorsConsultReserves.errorEditReserve,
                            reserve: {}
                            
                        });
                    } else {

                        const dateFinal = utils.getFullDate(resu[0].fecha_reserva);
                        const timeFinal = utils.getFullTime(resu[0].hora_reserva);
        
                        let object = {
                            idReserve: resu[0].id,
                            idUser: resu[0].id_user,
                            idStadium: resu[0].id_stadium,
                            numberStadium: resu[0].number_stadium,
                            nameClient: resu[0].cliente,
                            phone: resu[0].telefono,
                            email: resu[0].email,
                            date: dateFinal,
                            time: timeFinal,
                            cash: resu[0].senia
                        }

                        parametersEditReserve.shift();
                        parametersEditReserve.push(object)

                        res.json({
                            parametersInitialEditReserve: {
                                idReserve: parseData.idReserve,
                                idUser: parseData.idUser,
                                idStadium: parseData.idStadium,
                            },
                            isThereError: parseData.isThereError,
                            Message: "",
                            reserve: parametersEditReserve[0]
                            
                        });


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