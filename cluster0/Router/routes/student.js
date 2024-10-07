import express from 'express'

const router = express.Router()


// Student route
router.get('/all', (req,res)=>{
  res.send('All Student')
})
router.post('/create', (req,res)=>{
  res.send('New Student Create')
})
router.put('/update',(req,res)=>{
  res.send('Student Update')
})
router.delete('/delete',(req,res)=>{
  res.send('Student Deleted')
})

export default router


