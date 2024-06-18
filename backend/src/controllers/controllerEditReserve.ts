import utils from "./utils";
import pool from "../bd/bdConfig";

const editReserve = async (req:any, res:any) => {
    const id = await req.body;

    const parseID = utils.parseSelectEditReserve(id);
    if(parseID === "Reserva incorrecta") res.json(parseID);
} 

export default {
    editReserve
} 