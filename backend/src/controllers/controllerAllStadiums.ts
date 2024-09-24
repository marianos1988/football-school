import { parametersStadiums } from "../panelParameters/parameters";

const AllStadiums = (_req:any, res:any) => {

  const parameters = parametersStadiums.listStadiums[0];
  console.log(parameters)
  res.json(parameters);
}

export default {
  AllStadiums
}