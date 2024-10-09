import express from "express";
import { serviceController } from "../controllers/web.js";

const router = express.Router()

router.get('/service',serviceController)

export default router