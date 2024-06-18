import utils from "./utils";
import pool from "../bd/bdConfig";
import crypto from "crypto";

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
        pool.query(query,(err,resu)=>{
          try {
            if (err) {

              throw err;
            }
            if(resu < 1) {
  
              res.json("Usuario o clave incorrecta");
            }
            else {
              const object = {
                id: resu[0].id,
                username: resu[0].username
              };
  
  
              res.json(object);
            }
          } catch (error) {

            res.json("No se puede conectar a la base de datos");
          }

        })
    }
}

export default {
    login
}