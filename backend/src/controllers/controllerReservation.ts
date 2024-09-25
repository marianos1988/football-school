import pool from "../bd/bdConfig";

import utils from "./utils";

const reservation = async (req:any,res:any) => {
    const data = await req.body;

    const parseData = utils.parseReservation(data); //datos  


    if(parseData === "Datos invalidos") {
        res.json({validation: false, message: parseData, color: "red"});
    } else {


        const dataValidation = utils.validationFormReservation(parseData); //mensaje

        const dateToday = new Date();
        dateToday.getDate()
        const finalDateToday = utils.getFullDate(dateToday);

        try {

          const query = `
            INSERT INTO reservas (id_stadium, cliente, telefono, fecha_ingreso, fecha_reserva, hora_reserva, email, senia) VALUES ("${parseData.idStadium}", "${parseData.nameClient}", "${parseData.phone}", "${finalDateToday}", "${parseData.date}", "${parseData.date}:${parseData.time}:00","${parseData.email}", "${parseData.cash}");
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