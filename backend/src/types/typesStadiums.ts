export type ParametersStadiums = {
    count: number[],
    listStadiums: {
        id: number,
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

export type ParametersInitialReserve = {
    id: number,
    idUser: number,
    numberStadium: number,
    name: string
}[]