import { FormReservation } from "../components/FormReservation"

export type PropertiesSlice = {
        [x: string]: any

        blur: boolean,
        navLayer: boolean,
        section: string,
        btnBurguer: boolean,
        stateSpinner: boolean
}

export type LoginSlice = {
        id: number,
        username: string
}

export type ReservationStadiumSlice = {

        idStadium: number


}

export type ConsultStadiumSlice = {
        cantStadium: number,
        allStadium: boolean,
        dateSelected: string
}

export type FormReservation = {
        idStadium: number
        nameClient: string,
        phone: string,
        date: string,
        time: string,
        cash: number,
}


