export type ListReserves = {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    reserveDate: string,
    reserveTime: string,
    cash: number
}[] | []