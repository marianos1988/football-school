import jwt  from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config";




const Protected = async (req:any,res:any) =>{

  const getToken = await req.body;
    try {
        const validateToken = jwt.verify(getToken.token, SECRET_JWT_KEY);
    } catch (error) {
        
    console.log(error)
    }


   res.json(true);

    


}

export default {
    Protected,
}