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
        idStadium: number,
        idUser: number,
        typeStadium: number,
        typeFloor: string,
        name: string,
        description: string
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
