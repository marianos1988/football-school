import { ParametersLogin, ParametersReservationStadium, ParametersStadiums } from "@/types/TypeParameters";
 
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

export const parametersReservationStadium:ParametersReservationStadium = [{
  idStadium: 0,
  idUser: 0,
  numberStadium: 0,
  name: ""
}]

