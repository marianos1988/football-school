import { parametersStadiums } from "../panelParameters/parameters";

const AllStadiums = (_req:any, res:any) => {

  res.json(parametersStadiums.listStadiums);
}

export default {
  AllStadiums
}