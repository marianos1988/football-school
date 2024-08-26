export type ParametersLogin = {
    isLogin: boolean,
    id: number,
    username: string
  }[];


export type ParametersStadiums = {
    count: number,
    listStadiums: {
        id: number,
        id_user: number,
        typeStadium: number,
        name: string,
        description: string
    }[]
} 