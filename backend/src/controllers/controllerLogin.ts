import utils from "./utils";
import pool from "../bd/bdConfig";
import bcrypt from "bcrypt";
import { parametersLogin, parametersStadiums } from "../panelParameters/parameters";
import { SECRET_JWT_KEY } from "../config";
import jwt from "jsonwebtoken";



const login = async (req: any,res: any) => {
  
    const data = await req.body;


    const dataParse = utils.parseLogin(data);

    if(dataParse === "Datos incorrectos") {
        res.json({
          isThereError: true,
          message: dataParse,
          data: ""
        });

    } else {

        const query = `
          SELECT * FROM login WHERE username = "${dataParse.username}"
        `;
        pool.query(query,async (err,resu)=>{
          try {
            if (err) {

              throw err;
            }
            if(resu < 1) {
              
              res.json({
                isThereError: true,
                message: "No existe el usuario",
                data: ""
              });
            }
            else {

              const idUser = await resu[0];
              // Falta haschear Contraseña!!!!
              const passwordProvisoria = "1234";
              const hashedPasswordDB = bcrypt.hashSync(passwordProvisoria, 10);
              const isValidPassword = bcrypt.compareSync(dataParse.password, hashedPasswordDB); 

              if(isValidPassword) {

                const token = jwt.sign({
                  idUser: idUser.id,
                  username: idUser.username
                  },
                  SECRET_JWT_KEY,
                  {
                    expiresIn: "1h"
                  }
                )

                try {
                  const query2 = `
                    SELECT * FROM stadiums WHERE id_user = ${idUser.id}
                  `;
                  pool.query(query2, async(err2, resu2)=> {
                        if(err2) throw err2;
                        

                        const stadiums = await resu2;
                        let listStadiums:any = [];
                        stadiums.forEach((ele:any) => {

                          let stadium:any = {
                            idStadium: ele.id,
                            idUser: ele.id_user,
                            typeStadium: ele.typeStadium,
                            typeFloor: ele.type_floor,
                            name: ele.name,
                            description: ele.description
                          }

                          listStadiums.push(stadium);
                        });

                        parametersStadiums.listStadiums.push(listStadiums);
                        parametersStadiums.listStadiums.shift();

                        const newParameterLogin = {
                          isLogin: true,
                          idUser: idUser.id,
                          username: idUser.username
                        }

                        parametersLogin.push(newParameterLogin);
                        parametersLogin.shift();

                        const object = {
                          login:{
                            idUser: idUser.id,
                            username: idUser.username
                          },
                          stadiums: parametersStadiums.listStadiums
          
                        };
                        res.json({
                          isThereError: false,
                          message: "",
                          data: object,
                          token: token
                        });
                  });
                } catch {
                  res.json({
                    isThereError: true,
                    message: "No se puede conectar a la base de datos",
                    data: ""
                  });
                }

              } else {

                res.json({
                  isThereError: true,
                  message: "Contraseña Incorrecta",
                  data: ""
                })
              }

            }

            
          } catch (error) {
            res.json({
              isThereError: true,
              message: "No se puede conectar a la base de datos",
              data: ""
            });
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




export default {
    login,
    checkLogin,
}