import express from "express";
import { aboutController } from "../controller/aboutController.js";

const router = express.Router()

router.get('', aboutController)

export default router