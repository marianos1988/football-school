import utils from "./utils";
import pool from "../bd/bdConfig";
import crypto from "crypto";
import { parametersLogin } from "../panelParameters/parameters";


const login = async (req: any,res: any) => {
  
    const data = req.body;
    const dataParse = utils.parseLogin(data);

    if(dataParse === "Datos incorrectos") {
        res.json(dataParse);
    } else {

        const hash = crypto.createHash("sha256").update(dataParse.password).digest("hex");
        const query = `
          SELECT * FROM login WHERE username = "${dataParse.username}" AND password = "${hash}"
        `;
        pool.query(query,async (err,resu)=>{
          try {
            if (err) {

              throw err;
            }
            if(resu < 1) {
  
              res.json("Usuario o clave incorrecta");
            }
            else {

              const resul = await resu[0];
              const query2 = `
                SELECT * FROM stadiums WHERE id_user = ${resu[0].id}
              `
              pool.query(query2, async(err2, resu2)=> {
                 try {

                    if(err2) throw err2;
                    
                    const stadiums = await resu2;

                    const newParameterLogin = {
                      isLogin: true,
                      id: resul.id,
                      username: resul.username
                    }

                    parametersLogin.push(newParameterLogin);
                    parametersLogin.shift();


                    const object = {
                      login:{
                        id: resul.id,
                        username: resul.username
                      },
                      stadiums: stadiums
      
                    };
                    

        
                    res.json(object);
                    
                 } catch {

                    res.json("No se puede conectar a la base de datos");
                 }
              });
            }
            
          } catch (error) {

            res.json("No se puede conectar a la base de datos");
          }

        })
    }
}

const checkLogin = (_req: any, res: any) =>{
  if(parametersLogin[0].isLogin) {
    res.json(true);
  } else {
   res.json(false);
  }
}

const logout = async (req: any, res: any) => {
  const data = await req.body;

  const dataParse = utils.parseLogout(data);

  if(dataParse) {
    res.json(true)
  } else {
    res.json(false)
  }
}


export default {
    login,
    checkLogin,
    logout
}