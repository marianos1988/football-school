import { ParametersLogin } from "../types/typesLogin";
import { ParametersConsultStadium, ParametersInitialReserve, ParametersStadiums } from "../types/typesStadiums";

export const parametersLogin:ParametersLogin = [{
    isLogin: false,
    idUser: 0,
    username: ""
 
}];


export const parametersStadiums:ParametersStadiums = {
    count:[0],
    listStadiums:[{
      idStadium: 0,
      idUser: 0,
      typeStadium: 0, 
      typeFloor: "",
      name: "",
      description: ""
    }]
    }; 

    export const parametersInitialReserve:ParametersInitialReserve = [{
      idStadium: 0,
      idUser: 0,
      numberStadium: 0,
      name: ""
    }]

    export const parametersConsultStadium: ParametersConsultStadium = [{
      idStadium: 0,
      idUser: 0,
      typeStadium: 0,
      typeFloor: "",
      name: "",
      description: "",
      allStadium: false,
      numberStadium: 0,
    }];