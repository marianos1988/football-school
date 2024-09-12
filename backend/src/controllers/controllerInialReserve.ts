import { parametersInitalReserve } from "../panelParameters/parameters";



const initialReserve = async (req:any, res:any) => {

  const  data  = await req.body;

  parametersInitalReserve.push(data.newID);
  parametersInitalReserve.shift();

  res.json(parametersInitalReserve[0]);
}



export default {
  initialReserve
}