import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "./config";


import routerLogin from "./routes/routerLogin";
import routerReservation from "./routes/routerReservation";
import routerConsultStadium from "./routes/routerConsultStadium";
import routerEditReserve from "./routes/routerEditReserve";
import routerLogout from "./routes/routerLogout";
import routerAllStadiums from "./routes/routerAllStadiums";
import routerInitialReserve from "./routes/routerInitialReserve";
import routerInitialConsult from "./routes/routerInitialConsult";
import routerProtected from "./routes/routerProtected";
 

const app = express();
const PORT = 3000;

const jwtValidation = async (req:any,res:any) => {
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

app.use(cors());
app.use(helmet());
app.use(morgan("dev")); 
app.use(express.json());
app.use(cookieParser()); 

//Routes
app.use("/Auth/Login",routerLogin);



// Con validacion cookie
app.use(jwtValidation);
app.use("/Auth/Logout", routerLogout);
app.use("/Stadiums/AllStadiums", routerAllStadiums);
app.use("/Stadiums/initialReserve", routerInitialReserve)
app.use("/Stadiums/Reserve",routerReservation);
app.use("/Stadiums/Consult",routerConsultStadium);
app.use("/Stadiums/InitialConsult",routerInitialConsult);
app.use("/Stadiums/Consult/Edit",routerEditReserve);
app.get("/protected",routerProtected);
app.get("/prueba",(req,res)=>{res.json("probando token")})





app.listen(PORT,()=>{
    console.log("backend corriendo http://localhost:3000");
  })