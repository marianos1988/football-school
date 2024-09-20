import express from "express";
import controller from "../controllers/controllerInitialReserve"


const router = express.Router();


router.post("/",controller.initialReserve)


export default router;