export type Login = {
    username: string,
    password: string 
  }
  
export type Reservation = {
  idUser: number,
  idStadium: number,
  nameClient: string,
  phone: string,
  date: string,
  time: string,
  email: string,
  cash: number
} | "Datos invalidos"

export type ReservationValidation = {
  idStadium: number,
  nameClient: string,
  phone: string,
  date: string,
  time: string,
  email: string,
  cash: number,
}