import express from "express"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routerLogin from "./routes/routerLogin";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// //Routes
app.use("/Login",routerLogin);
// app.use("/NuevoTurno",routerNuevoTurno);
// app.use("/MisTurnos",routerMisTurnos);
// app.use("/EditarTurno", routerEditarTurno);


app.listen(PORT,()=>{
    console.log("backend corriendo http://localhost:3000");
  })