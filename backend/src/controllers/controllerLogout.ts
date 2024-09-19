import { parametersLogin } from "../panelParameters/parameters";
import utils from "./utils";

const logout = async (req: any, res: any) => {

    const data = await req.body;
    


    const dataParse = utils.parseLogout(data);
   
    if(dataParse) {

        const newLogout = {
			isLogin: false,
			idUser: 0,
			username: ""
		}
		parametersLogin.push(newLogout);
		parametersLogin.shift();

      res.json(true);
    } else {
      res.json(false)
    }
  }

  export default {
    logout
  } 