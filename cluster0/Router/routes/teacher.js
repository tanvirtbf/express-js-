import express  from "express"

const router = express.Router()

// Teacher route
router.get('/all', (req,res)=>{
  res.send('All teacher')
})
router.post('/create', (req,res)=>{
  res.send('New teacher Create')
})
router.put('/update',(req,res)=>{
  res.send('teacher Update')
})
router.delete('/delete',(req,res)=>{
  res.send('teacher Deleted')
})





