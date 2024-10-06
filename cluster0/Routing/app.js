import express from 'express'
const app = express()

const port = process.env.PORT || '3001'

// app.all('/', (req,res)=>{
//   res.send('Hello Post!')
// })
// app.get('/',(req,res)=>{
//   res.send('Page not found!')
// })
// app.get('/',(req,res)=>{
//   res.send('Hello World@')
// }) 

// app.all('/api/*', (req,res)=>{
//   res.send('API Page')
// }) // (/api er por sob route er jonno with any method...)

// Pattern Pattern Path 





app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
})




