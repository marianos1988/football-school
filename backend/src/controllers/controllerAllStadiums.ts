import { parametersStadiums } from "../panelParameters/parameters";

const AllStadiums = (_req:any, res:any) => {

  const parameters = parametersStadiums.listStadiums;
  res.json(parameters);
}

export default {
  AllStadiums
}