import express from "express";
import { aboutController, contactController, homeController } from "../controllers/homeController.js";

const router = express.Router()

router.get('/',homeController)
router.get('/about', aboutController)
router.get('/contact', contactController)

export default router