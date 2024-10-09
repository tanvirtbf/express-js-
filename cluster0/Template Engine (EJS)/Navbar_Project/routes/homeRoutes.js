import express from "express";
import { homeController} from "../controllers/web.js";

const router = express.Router()

router.get('/',homeController)


export default router