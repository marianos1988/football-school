export type ParametersLogin = {
    isLogin: boolean,
    idUser: number,
    username: string
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

export type PropertiesStadium = {
        id: number,
        idUser: number,
        typeStadium: number,
        typeFloor: string,
        name: string,
        description: string
}

export type ParametersReservationStadium = {
    id: number,
    idUser: number,
    numberStadium: number,
    name: string
}[]