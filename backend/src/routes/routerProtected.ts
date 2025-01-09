import  express  from "express";
import controller from "../controllers/controllerProtected";

const router = express.Router();


router.post("/",controller.Protected)


export default router;