export type ParametersLogin = {
    isLogin: boolean,
    id: number,
    username: string
  }[];

export type Logout = {
  isLogin: false,
  id: 0,
  username: ""
}