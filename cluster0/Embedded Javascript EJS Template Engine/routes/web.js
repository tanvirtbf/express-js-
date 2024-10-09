import express from 'express'
import { homeController } from '../controllers/homeController.js'

const router = express()

router.get('/', homeController)

export default router