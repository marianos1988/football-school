import { parametersLogin } from "../panelParameters/parameters";


const logout = async (req: any, res: any) => {

    const newLogout = {
      isLogin: false,
      idUser: 0,
      username: ""
    }

		parametersLogin.push(newLogout);
		parametersLogin.shift();

    res.json(true)

}
  

  export default {
    logout
  } 