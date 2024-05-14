import pool from "../bd/bdConfig";
import utils from "./utils";

const reservation = async (req:any,res:any) => {
    const data = await req.body;
  
    const parseData = utils.parseReservation(data);
   
    if(parseData === "Datos invalidos") {
        res.json({validation: false, message: parseData, color: "red"});
    } else {

        const dataValidation = utils.validationFormReservation(parseData);
        console.log(parseData);
        const dateToday = new Date();
        dateToday.getDate()
        const finalDateToday = utils.getFullDate(dateToday);
        console.log(finalDateToday);
        try {

          const query = `
            INSERT INTO reservas (id_stadium, cliente, fecha_ingreso, fecha_reserva, hora_reserva, seña) VALUES ("${parseData.idStadium}", "${parseData.nameClient}", "${finalDateToday}", "${parseData.date}", "${parseData.date}:${parseData.time}:00", "${parseData.cash}");
          `;
          pool.query(query,(err,_resu)=>{
            if (err) {
              console.log(err);
              throw err;

            }
            res.json(dataValidation);
          })
        } catch (error) {
            
        }
    }



    // res.json(parseData);
}

export default {
    reservation
}