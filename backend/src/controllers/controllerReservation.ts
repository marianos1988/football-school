import pool from "../bd/bdConfig";
import utils from "./utils";

const reservation = async (req:any,res:any) => {
    const data = await req.body;
  
    const parseData = utils.parseReservation(data);
   
    if(parseData === "Datos invalidos") {
        res.json({validation: false, message: parseData, color: "red"});
    } else {

        const dataValidation = utils.validationFormReservation(parseData);
        res.json(dataValidation);



    }



    // res.json(parseData);
}

export default {
    reservation
}