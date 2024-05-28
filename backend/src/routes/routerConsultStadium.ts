import  express  from "express";
import controller from "../controllers/controllerConsultStadium";


const router = express.Router();

router.post("/", controller.consultStadium);


export default router;