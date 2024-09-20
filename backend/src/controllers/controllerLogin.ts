import utils from "./utils";
import pool from "../bd/bdConfig";
import crypto from "crypto";
import { parametersLogin, parametersStadiums } from "../panelParameters/parameters";
import { PropertiesStadium } from "../types/typesStadiums";



const login = async (req: any,res: any) => {
  
    const data = await req.body;

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

              const idUser = await resu[0];

              const query2 = `
                SELECT * FROM stadiums WHERE id_user = ${idUser.id}
              `
              pool.query(query2, async(err2, resu2)=> {
                 try {

                    if(err2) throw err2;
                    

                    const stadiums = await resu2;
                    stadiums.forEach((ele:any) => {

                      let stadium:PropertiesStadium = {
                        idStadium: ele.id,
                        idUser: ele.id_user,
                        typeStadium: ele.typeStadium,
                        typeFloor: ele.type_floor,
                        name: ele.name,
                        description: ele.description
                      }

                      parametersStadiums.listStadiums.push(stadium);
                    });

                    parametersStadiums.listStadiums.shift();
                    console.log(parametersStadiums.listStadiums)



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




export default {
    login,
    checkLogin,
}