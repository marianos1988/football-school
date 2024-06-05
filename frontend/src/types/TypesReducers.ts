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
        idStadium: any
        reservationStadium:{
         idStadium: number
        }
}

export type ConsultStadiumSlice = {
        cantStadium: number,
        allStadium: boolean,
        dateSelected: string
}


