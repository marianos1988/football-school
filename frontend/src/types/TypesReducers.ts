export type PropertiesSlice = {

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
        idStadium: any
        reservationStadium:{
         idStadium: number
        }
}

export type ConsultStadiumSlice = {
        cantStadium: number,
        allStadium: boolean
}


