

export type PropertiesSlice = {
        [x: string]: any

        blur: boolean,
        navLayer: boolean,
        section: string,
        btnBurguer: boolean,
        stateSpinner: boolean,
        stateSpinner2: boolean,
        stateSpinner3: boolean,
        stateConfirmationPoster: boolean
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

export type Errors = {
        isActive: boolean,
        message: string
}

export type ErrorsPoster = {
    errorPoster: {
        isActive: boolean,
        messageTittle: string,
        messageSubtittle: string
    }

}
export type InitialErrorsPoster = {

        isActive: boolean,
        messageTittle: string,
        messageSubtittle: string

}


