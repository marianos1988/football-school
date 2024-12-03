import utils from "./utils";
import pool from "../bd/bdConfig";
import { parametersInitialEditReserve, parametersEditReserve } from "../panelParameters/parameters";
import { errorsConsultReserves } from "../errors/error";

const editReserve = async (req:any, res:any) => {

    const { addIdUser } = await req.body; 
    console.log(addIdUser)
    const parseData = utils.parseSelectEditReserve(addIdUser)




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
            pool.query(query, ( async (err,resu) =>{

                try {
                    const newResu = await resu;


                    if(err) throw err;

                    if(newResu < 1) {
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

                        const dateFinal = utils.getFullDate(newResu[0].fecha_reserva);
                        const timeFinal = utils.getFullTime(newResu[0].hora_reserva);
        
                        let object = {
                            idReserve: newResu[0].id,
                            idUser: newResu[0].id_user,
                            idStadium: newResu[0].id_stadium,
                            numberStadium: newResu[0].number_stadium,
                            nameClient: newResu[0].cliente,
                            phone: newResu[0].telefono,
                            email: newResu[0].email,
                            date: dateFinal,
                            time: timeFinal,
                            cash: newResu[0].senia
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