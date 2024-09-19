import { errorsSlice } from "@/reducers/errorsSlice/ErrorsSlices"

export const errorsLogin = {
    
    errorInfo: "Datos incorrectos",
    errorUserAndPass: "Usuario o clave incorrecta",
    errorConnection: "No se puede conectar a la base de datos",
    errorBackend: "No se puede conectar al servidor vuelva a reconectar"

}

export const errorsReserveStadium = {

    errorNameClient: {
        mesasge: `Nombre demasiado corto`,
        color: `red`
    },
    errorPhone: {
        mesasge: `Debes ingresar un telefono correcto`,
        color: `red`
    },
        errorDate: {
        mesasge: `Ingrese una fecha correcta`,
        color: `red`
    },
    errorBeforeDate: {
        mesasge: `La fecha es anterior al día de hoy`,
        color: `red`
    },
    errorTime: {
        mesasge: `Ingrese una hora correcta`,
        color: `red`
    },
    errorCash: {
        mesasge: `Debes ingresar un importe correcto`,
        color: `red`
    },
    

}