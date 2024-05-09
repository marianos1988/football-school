export type Login = {
    username: string,
    password: string 
  }
export type Reservation = {
  idStadium: number,
  nameClient: string,
  date: string,
  time: string,
  cash: number
} | "Datos invalidos"