export type ParametersLogin = {
    isLogin: boolean,
    idUser: number,
    email: string
  }[];

export type ParametersStadiums = {
    count: number[],
    listStadiums: {
        idStadium: number,
        idUser: number,
        typeStadium: number,
        typeFloor: string,
        name: string,
        description: string
    }[]
}

export type ParametersInitialReserve = {
    idStadium: number,
    idUser: number,
    numberStadium: number,
    name: string
}[]

export type ParametersConsultStadium = {
    idStadium: number,
    idUser: number,
    typeStadium: number,
    typeFloor: string,
    name: string,
    description: string,
    allStadium: boolean,
    numberStadium: number
}[]

export type ParametersReservationList = {
    idReserve: number,
    idStadium: number,
    idUser: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
}[]

export type ParametersInitialEditReserve = [{

    idReserve: number,
    idStadium: number,
    idUser: number,
}]

export type ParametersEditReserve = {
    idReserve: number,
    idStadium: number,
    idUser: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
}[]