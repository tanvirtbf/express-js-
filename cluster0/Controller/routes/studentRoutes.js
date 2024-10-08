import express from 'express'
import { allStudent,deleteStudent } from '../controllers/studentController.js'
const router = express.Router()

router.get('/all',allStudent)
router.get('/delete/:id',deleteStudent)

export default router