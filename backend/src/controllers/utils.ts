import { Login, Reservation, ReservationValidation } from "./types";
import { errorsReserveStadium, errorsGenerals } from "../errors/error"; 

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

  const validateEmail = (email:string) => {
	// Expresión regular para validar formato de email
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
	// Verifica si el email coincide con la expresión regular
	if (regex.test(email)) {
		return true;  // El correo es válido
	} else {
		return false; // El correo es inválido
	}
  }

const parseLogin = (user: any):Login | "Datos incorrectos" =>  {
	if(isString(user.email) && isString(user.password)) {
			return user;
	} else {
		return "Datos incorrectos";
	}
}

const parseReservation = (reservation:any):Reservation | "Datos invalidos" => {
  if(isNumber(reservation.idStadium) && isNumber(reservation.idUser) &&  isNumber(reservation.numberStadium) && isString(reservation.nameClient) && isString(reservation.phone) && isString(reservation.date) && isString(reservation.time) && isString(reservation.email) && isOnlyNumber(reservation.cash)) {
	const newReservation = {
		idUser: reservation.idUser,
		idStadium: reservation.idStadium,
		numberStadium: reservation.numberStadium,
		nameClient: reservation.nameClient,
		phone: reservation.phone,
		date: reservation.date,
		time: reservation.time,
		email:reservation.email,
		cash: parseInt(reservation.cash) 
	}

	return newReservation
  } else {
		return "Datos invalidos";
  	}
}

const parseConsultStadium = (object:any): {

		data: {

			date: string,
			idStadium: number,
			idUser: number,
			allStadiums: boolean
		},
		validate: boolean
	
} => {

	if(isString(object.date) && isNumber(object.idStadium) && isNumber(object.idUser) && isBoolean(object.allStadiums)) {


		return {validate:true, data: object};
	}
	else {
		return {validate:false, data:{

			date:"",
			idStadium: 0,
			idUser: 0,
			allStadiums: false
		}};
	}

}

const parseSelectEditReserve = (data:{idReserve: any, idStadium: any, idUser: any}): {
	idReserve: number,
	idStadium: number,
	idUser: number,
	isThereError: boolean,
	message: string
	}=> {

	if(isNumber(data.idReserve) && isNumber(data.idStadium) && isNumber(data.idUser)) {
		return {
			idReserve: data.idReserve,
			idStadium: data.idStadium,
			idUser: data.idUser,
			isThereError: false,
			message: "",
		}
	} else {
		return {
			idReserve: 0,
			idStadium: 0,
			idUser: 0,
			isThereError: true,
			message: errorsGenerals.errorData, 
		}
	}
}


const parseInitialReserve = (data: any): boolean => {
	if((isNumber(data.idStadium)) && (isNumber(data.numberStadium)) && (isString(data.name))) {
		return true;
	} else {
		return false;
	}

}

const parseInitialConsult = (data:any) => {
	if(isNumber(data.idStadium) && isNumber(data.numberStadium)) {
		return true;
	} else {
		false;
	}
}


const validationFormReservation = (reserve:ReservationValidation) => {
	const todayDate = new Date();
    const dateObject = new Date(reserve.date);
    dateObject.setDate(dateObject.getDate()+1);

    if(reserve.nameClient.length < 4) {
		const object = {validation: false, message: errorsReserveStadium.errorNameClient ,color:errorsReserveStadium.colorRed}
		return object;
    
    }
	else if(!isOnlyNumber(reserve.phone)) {
		const object = {validation:false, message: errorsReserveStadium.errorPhone ,color:errorsReserveStadium.colorRed};
		return object;
	}
	else if(reserve.phone.length < 8) {
		const object = {message: errorsReserveStadium.errorPhoneLength ,color: errorsReserveStadium.colorRed};
		return object;
	}
	else if(reserve.date === "") { 
       const object = {validation: false, message: errorsReserveStadium.errorDate ,color: errorsReserveStadium.colorRed};
	   return object;
    }
    else if(dateObject < todayDate) {
      const object = {validation: false, message: errorsReserveStadium.errorBeforeDate ,color: errorsReserveStadium.colorRed};
      return object;
    }
    else if(reserve.time === "") {
      const object = {validaiton: false, message:errorsReserveStadium.errorTime ,color: errorsReserveStadium.colorRed};
      return object;
    }
	else if(!validateEmail(reserve.email)) {

		return {validation: false, message: errorsReserveStadium.errorEmail, color: errorsReserveStadium.colorRed};
	}
    else if(!isOnlyNumber(reserve.cash)) {
      const object= {validation: false, message: errorsReserveStadium.errorCash, color:errorsReserveStadium.errorCash};
      return object;
    }
    else {
		const object = {validation: true, message: errorsReserveStadium.errorConfirmation,color: errorsReserveStadium.colorGreen};
		return object; 
    }
} 

const addCero = (number:number)=> {
    if(number < 10) return `0${number}` 
	else return number;
  }

const getFullDate = (date:Date)=> {

	const finalDate = `${date.getFullYear()}-${addCero(date.getMonth()+1)}-${addCero(date.getDate())}`;
	return finalDate;
}

const getFullTime = (time:Date) => {
	const finalTime = `${time.getHours()}:${time.getMinutes()}`;
	return finalTime;
}


export default {
	isOnlyNumber,
	parseLogin,
  	parseReservation,
	parseConsultStadium,
	parseInitialConsult,
	validationFormReservation,
	getFullDate,
	getFullTime,
	addCero,
	parseSelectEditReserve,
	parseInitialReserve
}