import pool from "../bd/bdConfig";
import utils from "./utils";

const reservation = async (req:any,res:any) => {
const data = await req.body;
const parseData = utils.parseReservation(data);
res.json(parseData);
}

export default {
    reservation
}