import  express  from "express";
import controllerAllStadium from "../controllers/controllerAllStadiums";


const router = express.Router();

router.get("/", controllerAllStadium.AllStadiums);

export default router;