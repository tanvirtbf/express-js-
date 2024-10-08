import express from 'express'
import { allTeacher,deleteTeacher } from '../controllers/teacherController.js'

const router = express.Router()

router.get('/all',allTeacher)
router.get('/delete/:id',deleteTeacher)

export default router