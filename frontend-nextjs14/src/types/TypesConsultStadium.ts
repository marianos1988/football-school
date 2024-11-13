export type ListReserves = {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number
}[] | []

export type TConsultStadium = {

    idStadium: number,
    idUser: number,
    name: string,
    typeFloor:string,
    description: string, 
    typeStadium: number,
    numberStadium: number
}

export type TConsultAllStadium = {

    idStadium: number,
    idUser: number,
    name: string,
    typeFloor:string,
    description: string, 
    typeStadium: number,
    numberStadium: number
}[]

export type TListReserves = {

    idReserve: number,
    idStadium: number,
    idUser: number,
    numberStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
}[]

export type TEditReserve = {

    idReserve: number,
    idStadium: number,
    idUser: number,
    numberStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
}
