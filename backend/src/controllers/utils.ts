import { Login, Reservation, ReservationValidation } from "./types";

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
  if(isNumber(reservation.idStadium) && isString(reservation.nameClient) && isString(reservation.phone) && isString(reservation.date) && isString(reservation.time) && isOnlyNumber(reservation.cash)) {
	const newReservation = {
		idStadium: reservation.idStadium,
		nameClient: reservation.nameClient,
		phone: reservation.phone,
		date: reservation.date,
		time: reservation.time,
		cash: parseInt(reservation.cash) 
	}

	return newReservation
  } else {
		return "Datos invalidos";
  	}
}

const parseConsultStadium = (date: any): string => {
	if(isString(date)) {
		const todayDate = new Date;

		return date;
	}
	else {
		return "Datos incorrectos";
	}

}

const validationFormReservation = (reserve:ReservationValidation) => {
	const todayDate = new Date();
    const dateObject = new Date(reserve.date);
    dateObject.setDate(dateObject.getDate()+1);

    if(reserve.nameClient.length < 4) {
		const object = {validation: false, message:"Nombre demasiado corto",color:"red"}
		return object;
    
    }
	else if(!isOnlyNumber(reserve.phone)) {
		const object = {validation:false, message:"Debes ingresar un telefono correcto",color:"red"};
		return object;
	}
	else if(reserve.phone.length < 8) {
		const object = {message:"Telefono demasiado corto",color:"red"};
		return object;
	}
	else if(reserve.date === "") { 
       const object = {validation: false, message:"Ingrese una fecha correcta",color:"red"};
	   return object;
    }
    else if(dateObject < todayDate) {
      const object = {validation: false, message:"La fecha es anterior al día de hoy",color:"red"};
      return object;
    }
    else if(reserve.time === "") {
      const object = {validaiton: false, message:"Ingrese una hora correcta",color:"red"};
      return object;
    }
    else if(!isOnlyNumber(reserve.cash)) {
      const object= {validation: false, message:"Debes ingresar un importe correcto",color:"red"};
      return object;
    }
    else {
		const object = {validation: true, message:"Reserva confirmada",color:"green"}
		return object;
    }
}

const addCero = (number:number)=> {
    if(number < 10)
      return `0${number}`
  }

const getFullDate = (date:Date)=> {

	const finalDate = `${date.getFullYear()}-${addCero(date.getMonth()+1)}-${addCero(date.getDate())}`;
	return finalDate;
}


export default {
	isOnlyNumber,
	parseLogin,
  	parseReservation,
	parseConsultStadium,
	validationFormReservation,
	getFullDate,
	addCero
}