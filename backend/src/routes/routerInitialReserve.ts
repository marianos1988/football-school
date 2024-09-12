import express from "express";
import controller from "../controllers/controllerInialReserve"


const router = express.Router();


router.post("/",controller.initialReserve)


export default router;