import  express  from "express";
import controller from "../controllers/controllerLogin";

const router = express.Router();

router.post("/", controller.login);

router.get("/", controller.checkLogin)

export default router;