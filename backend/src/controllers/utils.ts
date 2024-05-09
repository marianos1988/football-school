import { Login, Reservation } from "./types";

const isString = (string:any) => {
	if(typeof string === "string") {
		return true;
	} else {
		return false;
	}
}
const isNumber = (string:any) => {
	if(typeof string === "number") {
		return true;
	} else {
		return false;
	}
}
const isBoolean = (string:any) => {
	if(typeof string === "boolean") {
		return true;
	} else {
		return false;
	}
}

const isOnlyNumber = (texto:any) => {
    // Expresión regular para verificar si el texto contiene solo números
    let regex = /^[0-9]+$/;
    
    // Usamos el método test de la expresión regular para verificar si coincide con el texto
    if (regex.test(texto)) {
      return true; // El texto contiene solo números
    } else {
      return false; // El texto contiene otros caracteres además de números
    }
  }

const parseLogin = (user: any):Login | "Datos incorrectos" =>  {
	if(isString(user.username) && isString(user.password)) {
			return user;
	} else {
		return "Datos incorrectos";
	}
}

const parseReservation = (reservation:any):Reservation => {
  if(isNumber(reservation.idStadium) && isString(reservation.nameClient) && isString(reservation.date) && isString(reservation.time) && isOnlyNumber(reservation.cash)) {
	const newReservation = {
		idStadium: reservation.idStadium,
		nameClient: reservation.newClient,
		date: reservation.date,
		time: reservation.time,
		cash: parseInt(reservation.cash)
	}

	return newReservation
  } else {
		return "Datos invalidos";
  	}
}



export default {
	isOnlyNumber,
	parseLogin,
  	parseReservation
}