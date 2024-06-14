import utils from "./utils";
import pool from "../bd/bdConfig";

const editReserve = async (req:any, res:any) => {
    const id = await req.body;
    console.log(id);
} 

export default {
    editReserve
}