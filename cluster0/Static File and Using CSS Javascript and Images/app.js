import express from "express";
import home from './routes/homeRoutes.js'
import { join } from 'path'

const app = express()

// Static Files

// Without Virtual Path
app.use(express.static(join(process.cwd(),'public')))

// With Virtual Path
app.use('/static',express.static(join(process.cwd(),'public')))

app.use('/',home)

const port = process.env.PORT || '3000'

app.listen(port,()=>{
  console.log(`App Run With http://localhost:${port}`)
})
