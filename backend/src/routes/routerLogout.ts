import express from "express";
import controllerLogout from "../controllers/controllerLogout";

const router = express.Router();


router.get("/", controllerLogout.logout);

export default router;

