import  express  from "express";
import controller from "../controllers/controllerPortected";

const router = express.Router();


router.post("/",controller.Protected)


export default router;