import express from "express"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routerLogin from "./routes/routerLogin";
import routerReservation from "./routes/routerReservation";
import routerConsultStadium from "./routes/routerConsultStadium";
import routerEditReserve from "./routes/routerEditReserve";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// //Routes
app.use("/",routerLogin);
app.use("/Stadiums/Reserve",routerReservation);
app.use("/Stadiums/Consult",routerConsultStadium);
app.use("/Stadiums/Consult/Edit",routerEditReserve);



app.listen(PORT,()=>{
    console.log("backend corriendo http://localhost:3000");
  })