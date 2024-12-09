import jwt  from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config";
const Protected = async (req:any,res:any) =>{


    
    try {

        const token = await req.cookies.token;
        if (!token) {
            return res.status(403).send('Token no encontrado');
        }
    
        // Verificar el JWT
        const validToken = jwt.verify(token, SECRET_JWT_KEY);
        
        if(validToken) {
            res.json("token ok");
        } else {
            res.json("token erroneo")
        }
    } catch {

    }


}

export default {
    Protected,
}