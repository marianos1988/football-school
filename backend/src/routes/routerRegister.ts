import express from "express";
import controller from "../controllers/controllerRegister";


const router = express.Router();

router.post("/",controller.register);

export default router;