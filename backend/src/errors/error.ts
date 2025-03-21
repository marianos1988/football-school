
export const errorsLogin = {
    typeError: 1,
    errorInfo: "Datos incorrectos",
    errorUserAndPass: "Usuario o clave incorrecta",
    errorConnection: "No se puede conectar a la base de datos",
    errorBackend: "No se puede conectar al servidor vuelva a reconectar"

}

export const errorsReserveStadium = { 

    typeError: 2,
    errorNameClient: `Nombre demasiado corto`,
    errorPhone: `Debes ingresar un telefono correcto`,
    errorPhoneLength: `Debe tener al menos 8 digitos`,
    errorDate: `Ingrese una fecha correcta`,
    errorBeforeDate: `La fecha es anterior al día de hoy`,
    errorTime: `Ingrese una hora correcta`,
    errorEmail: `Debes ingresar un email correcto`,
    errorCash: `Debes ingresar un importe correcto`,
    errorConfirmation: "Reserva Confirmada",
    colorRed: "red",
    colorGreen: "green",
    
}

export const errorsGenerals = {
    typeError: 3,
    errorData: "Datos invalidos",
    errorBackend: "No se puede conectar al servidor vuelva a reconectar",
    errorConnection: "No se puede conectar a la base de datos",
}

export const errorsConsultReserves = {
    typeError: 4,
    errorwithoutReservation: "No existen reservas",
    errorEditReserve: "No existe la reserva para editar"
}

export const errorsJWToken = {
    typeError: 5,
    errorTokenExpiredError: "Token expirado",
    errorJsonWebTokenError: "Token inválido",
    errorNotBeforeError: "Token no activo aún",
    errorAuthentication: "Error de autenticación",
    errorOthers: "Error de JW Token"
}