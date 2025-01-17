import { parametersLogin } from "../panelParameters/parameters";


const logout = async (req: any, res: any) => {

    const newLogout = {
      isLogin: false,
      idUser: 0,
      email: ""
    }

		parametersLogin.push(newLogout);
		parametersLogin.shift();

    res.json(true)

}
  

  export default {
    logout
  } 