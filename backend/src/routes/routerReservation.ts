import  express  from "express";
import controller from "../controllers/controllerReservation";

const router = express.Router();


router.post("/",controller.reservation)


export default router;