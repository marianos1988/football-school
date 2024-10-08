export type FormReservationInitial = {
    idStadium: number
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: string | number
}

export type FormReservationEdit = {
    idStadium: number,
    id: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number
}


