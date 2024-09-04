import express from "express";
import controllerLogout from "../controllers/controllerLogout";

const router = express.Router();


router.post("/", controllerLogout.logout);

export default router;

