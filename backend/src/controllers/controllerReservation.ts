import pool from "../bd/bdConfig";
import { parametersLogin } from "../panelParameters/parameters";

import utils from "./utils";

const reservation = async (req:any,res:any) => {
    const data = await req.body;
    let objectData = {};

    if (data.idUser === 0) {

      objectData = {

        idUser: parametersLogin[0].idUser,
        idStadium: data.idStadium,
        nameClient: data.nameClient,
        phone: data.phone,
        date: data.date,
        time: data.time,
        email: data.email,
        cash: data.cash

      }
    } else {
      
      objectData =  data;
    }

    const parseData = utils.parseReservation(objectData); //datos  



    if(parseData === "Datos invalidos") {
        res.json({validation: false, message: parseData, color: "red"});
    } else {


        const dataValidation = utils.validationFormReservation(parseData); //mensaje

        const dateToday = new Date();
        dateToday.getDate();
        const finalDateToday = utils.getFullDate(dateToday);

        try {

          const query = `
            INSERT INTO reservas (id_stadium, id_user, cliente, telefono, fecha_ingreso, fecha_reserva, hora_reserva, email, senia) VALUES ("${parseData.idStadium}", "${parseData.idUser}","${parseData.nameClient}", "${parseData.phone}", "${finalDateToday}", "${parseData.date}", "${parseData.date}:${parseData.time}:00","${parseData.email}", "${parseData.cash}");
          `;
          pool.query(query,(err,_resu)=>{
            if (err) {
              console.log(err);
              throw err;

            }
            const sendData = {
              message: dataValidation.message,
              color: dataValidation.color
            }
            res.json(sendData);
          })
        } catch (error) {
            
        }
    
    }

}

export default {
    reservation
}