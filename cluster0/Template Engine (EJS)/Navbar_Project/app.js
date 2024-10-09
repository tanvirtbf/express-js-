import express from 'express'
import homeRoutes from './routes/homeRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import { join } from 'path'
const app = express()

app.use(express.static(join(process.cwd(),'public')))

app.use('',homeRoutes)
app.use('',aboutRoutes)
app.use('',contactRoutes)
app.use('',serviceRoutes)

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})