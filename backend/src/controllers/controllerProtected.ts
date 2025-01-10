import jwt  from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config";
import { errorsJWToken } from "../errors/error";




const Protected = async (req:any,res:any) =>{

  const getToken = await req.body;

    try {
      
      const validateToken = jwt.verify(getToken, SECRET_JWT_KEY, (err, _decoded) => {
        if (err) {

          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ 
              isThereError: true,
              message: errorsJWToken.errorTokenExpiredError,

            });

          } else if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({
              isThereError: true,
              message: errorsJWToken.errorJsonWebTokenError,
            
            });

          } else if (err.name === 'NotBeforeError') {
            return res.status(401).json({ 
              isThereError: true,
              message: errorsJWToken.errorNotBeforeError

            });

          } else {
            return res.status(401).json({
              isThereError: true,
              message: errorsJWToken.errorAuthentication

            });
          }
        }

        res.json({
          isThereError: false,
          message: ""
  });
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