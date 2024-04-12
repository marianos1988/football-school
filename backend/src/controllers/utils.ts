import { Login } from "./types";

const isString = (string:any) => {
	if(typeof string === "string") {
		return true;
	} else {
		return false;
	}
}
const isNumber = (string:any) => {
	if(typeof string === "string") {
		return true;
	} else {
		return false;
	}
}
const isBoolean = (string:any) => {
	if(typeof string === "string") {
		return true;
	} else {
		return false;
	}
}

const parseLogin = (user: any):Login | "Datos incorrectos" =>  {
	if(isString(user.username) && isString(user.password)) {
			return user;
	} else {
		return "Datos incorrectos";
	}
}

export default {
	parseLogin
}