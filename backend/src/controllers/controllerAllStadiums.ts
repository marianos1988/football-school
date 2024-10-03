import { parametersStadiums } from "../panelParameters/parameters";

const AllStadiums = (_req:any, res:any) => {

  const parameters = parametersStadiums.listStadiums[0];

  res.json(parameters);
}

export default {
  AllStadiums
}