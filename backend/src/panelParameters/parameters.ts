import { ParametersConsultStadium, ParametersEditReserve, ParametersInitialEditReserve, ParametersInitialReserve, ParametersLogin, ParametersReservationList, ParametersStadiums } from "../types/typesParameters";


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

    export const parametersReservationList: ParametersReservationList = [{
      idReserve: 0,
      idStadium: 0,
      idUser: 0,
      nameClient: "",
      phone: "",
      date: "",
      time: "", 
      email: "",
      cash: 0
    }];

    export const parametersInitialEditReserve: ParametersInitialEditReserve = [{
      idReserve: 0,
      idStadium: 0,
      idUser: 0,
    }]
    
    export const parametersEditReserve: ParametersEditReserve = [{
      idReserve: 0,
      idStadium: 0,
      idUser: 0,
      nameClient: "",
      phone: "",
      date: "",
      time: "",
      email: "",
      cash: 0
    }]