import { ParametersLogin } from "../types/typesLogin";
import { ParametersStadiums } from "../types/typesStadiums";

export const parametersLogin:ParametersLogin = [{
    isLogin: false,
    id: 0,
    username: ""

}];


export const parametersStadiums:ParametersStadiums = {
    count:[0],
    listStadiums:[{
      id: 0,
      idUser: 0,
      typeStadium: 0,
      typeFloor: "",
      name: "",
      description: ""
    }]
    };