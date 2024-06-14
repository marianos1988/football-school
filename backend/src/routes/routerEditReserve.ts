import  express  from "express";
import controller from "../controllers/controllerEditReserve";


const router = express.Router();

router.post("/",controller.editReserve);

export default router;