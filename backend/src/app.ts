import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";



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


app.use(cors({
    // origin: 'http://localhost:3001',  // Aquí coloca el dominio de tu frontend
    // credentials: true  // Permite el envío de cookies y encabezados de autenticación
}));
app.use(helmet());
app.use(morgan("dev")); 
app.use(express.json());


//Routes
app.use("/Auth/Login",routerLogin);



app.use("/Auth/Logout", routerLogout);
app.use("/Stadiums/AllStadiums", routerAllStadiums);
app.use("/Stadiums/initialReserve", routerInitialReserve)
app.use("/Stadiums/Reserve",routerReservation);
app.use("/Stadiums/Consult",routerConsultStadium);
app.use("/Stadiums/InitialConsult",routerInitialConsult);
app.use("/Stadiums/Consult/Edit",routerEditReserve);
app.use("/protected",routerProtected);





app.listen(PORT,()=>{
    console.log("backend corriendo http://localhost:3000");
  })