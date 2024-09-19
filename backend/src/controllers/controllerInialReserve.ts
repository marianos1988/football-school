import { parametersInitalReserve } from "../panelParameters/parameters";
import utils from "./utils";
// import utils from "./utils";



const initialReserve = async (req:any, res:any) => {

  const  data  = await req.body;
  const parseData = utils.parseInitalReserve(data.newID)
  if(parseData) {
    parametersInitalReserve.push(data.newID);
    parametersInitalReserve.shift();
    res.json(parametersInitalReserve[0]);
  } else {
    console.log("error")
    res.json("Datos invalidos");
  }

}



export default {
  initialReserve
}