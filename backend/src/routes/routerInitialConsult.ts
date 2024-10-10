import express from "express";
import controller from "../controllers/controllerInitialConsult";


const router = express.Router();

router.post("/",controller.InitialConsult);

export default router;