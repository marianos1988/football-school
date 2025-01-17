import { ParametersConsultStadium, ParametersEditReserve, ParametersLogin, ParametersReservationList, ParametersReservationStadium, ParametersStadiums } from "@/types/TypeParameters";
 
export const parametersLogin:ParametersLogin = [{
  isLogin: false,
  idUser: 0,
  email: ""
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

export const parametersReservationStadium:ParametersReservationStadium = [{
  idStadium: 0,
  idUser: 0,
  numberStadium: 0,
  name: ""
}];

export const parametersConsultStadium: ParametersConsultStadium = [{
  idStadium: 0,
  idUser: 0,
  typeStadium: 0,
  typeFloor: "",
  name: "",
  description: "",
  allStadium: false,
  numberStadium: 0
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

export type ParametersInitialEditReserve = [{

  idReserve: number,
  idStadium: number,
  idUser: number,
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