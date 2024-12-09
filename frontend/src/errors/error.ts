
export const errorsLogin = {
    
    errorInfo: "Datos incorrectos",
    errorUserAndPass: "Usuario o clave incorrecta",
    errorConnection: "No se puede conectar a la base de datos",
    errorBackend: "No se puede conectar al servidor vuelva a reconectar"

}

export const errorsReserveStadium = {

    errorNameClient: {
        message: `Nombre demasiado corto`,
        color: `red`
    },
    errorPhone: {
        message: `Debes ingresar un telefono correcto`,
        color: `red`
    },
    errorPhoneLength: {
        message: `El telefono debe tener al menos 8 digitos`,
        color: `red`
    },
        errorDate: {
        message: `Ingrese una fecha correcta`,
        color: `red`
    },
    errorBeforeDate: {
        message: `La fecha es anterior al día de hoy`,
        color: `red`
    },
    errorTime: {
        message: `Ingrese una hora correcta`,
        color: `red`
    },
    errorEmail: {
        message: `Debes ingresar un email correcto`,
        color: `red`
    },
    errorCash: {
        message: `Debes ingresar un importe correcto`,
        color: `red`
    },
    errorConection: {
        message: `Se produjo un error de conexión con el servidor`,
        color: `red`
    },
}

export const errorsWarningPoster = {
    errorConection : {
        tittle: "Error de conexión",
        subtittle: "Se produjo un error de conexión con el servidor"
    }
}

export const errorsConsultReserves = {
    errorwithoutReservation: "No existen reservas"
}