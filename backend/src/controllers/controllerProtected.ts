import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config";
import { errorsJWToken } from "../errors/error";




const Protected = async (req:any,res:any) =>{

  const getToken = await req.body;

    try {
      
          const validToken = jwt.verify(getToken.token, SECRET_JWT_KEY, (err:any, _decoded:any) => {
            
            if(err) {

              if (err.name === 'TokenExpiredError') {
                return { 
                  isThereError: true,
                  typeError: errorsJWToken.typeError,
                  message: errorsJWToken.errorTokenExpiredError,

                };

              } else if (err.name === 'JsonWebTokenError') {
                return {
                  isThereError: true,
                  typeError: errorsJWToken.typeError,
                  message: errorsJWToken.errorJsonWebTokenError,
                
                }

              } else if (err.name === 'NotBeforeError') {
                return { 
                  isThereError: true,
                  typeError: errorsJWToken.typeError,
                  message: errorsJWToken.errorNotBeforeError

                };

              } else {
                return {
                  isThereError: true,
                  typeError: errorsJWToken.typeError,
                  message: errorsJWToken.errorAuthentication

                };
              }

            } else {
              return ({
                isThereError: false,
                message: ""
              });

              }
          })
          
          res.json(validToken);

        } catch (error) {


      res.json({
        
              isThereError: true,
              typeError: errorsJWToken.typeError,
              message: errorsJWToken.errorOthers
      })
    }

}

export default {
    Protected,
}