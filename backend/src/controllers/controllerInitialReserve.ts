import { parametersInitialReserve } from "../panelParameters/parameters";
import utils from "./utils";




const initialReserve = async (req:any, res:any) => {

  const  data  = await req.body;


  const parseData = utils.parseInitialReserve(data.newID);

  if(parseData) {
    parametersInitialReserve.push(data.newID);
    parametersInitialReserve.shift();


    res.json(parametersInitialReserve[0]);
  } else {
 
    // Revisar Error!!!!!!!! que explotaaaaa
    res.json("Datos invalidos");
  }

}

const getInitialReserve = async (_req:any,res:any) => {

  const data = parametersInitialReserve[0];

  res.json(data);
}

export default {
  initialReserve,
  getInitialReserve
} 