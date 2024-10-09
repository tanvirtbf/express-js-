import express from "express";
import { contactController } from "../controllers/web.js";

const router = express.Router()

router.get('/contact',contactController)

export default router