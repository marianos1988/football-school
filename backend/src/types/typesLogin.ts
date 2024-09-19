export type ParametersLogin = {
    isLogin: boolean,
    idUser: number,
    username: string
  }[];

export type Logout = {
  isLogin: false,
  id: 0,
  username: ""
}