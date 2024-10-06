import express from 'express'
const app = express()

const port = process.env.PORT || '3000'

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
app.get('/ab?cd', (req,res)=>{
  res.send('This route path will match acd and abcd')
}) // This route path will match acd and abcd
// only /acd or /abcd route e hit hobe




app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
})




