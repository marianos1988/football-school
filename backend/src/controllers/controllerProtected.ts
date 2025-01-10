import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config";
import { errorsJWToken } from "../errors/error";




const Protected = async (req:any,res:any) =>{

  const getToken = await req.body;

    try {
      
        const validToken = jwt.verify(getToken.token, SECRET_JWT_KEY, (err:any, _decoded:any) => {
          if (err) {

            if (err.name === 'TokenExpiredError') {
              return { 
                isThereError: true,
                message: errorsJWToken.errorTokenExpiredError,

              };

            } else if (err.name === 'JsonWebTokenError') {
              return {
                isThereError: true,
                message: errorsJWToken.errorJsonWebTokenError,
              
              }

            } else if (err.name === 'NotBeforeError') {
              return { 
                isThereError: true,
                message: errorsJWToken.errorNotBeforeError

              };

            } else {
              return {
                isThereError: true,
                message: errorsJWToken.errorAuthentication

              };
            }

            } else {
              res.json({
                isThereError: false,
                message: ""
              });

            }
          })



    } catch (error) {


      res.json({
              isThereError: true,
              message: errorsJWToken.errorOthers
      })
    }

}

export default {
    Protected,
}