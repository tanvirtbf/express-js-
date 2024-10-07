// Router 

// Router class is used to create modular, mountable route handlers.
// A Router instance is a complete middleware and routing system.
// Every Express application has a built-in app router

// Steps : 
// # Create Router Module --- routes/students.js
// # Create Router instance
// # const router = express.Router()
// # Define Routes using router object
  // router.get('/',(req,res)=>{
  //   res.send('hello world!')
  // })
// Export Router
  // module.exports = router or export default router

// Import Router Module
// # Create/Open app.js
// const stu = require('./students.js')
// Load Router Module
  // app.use('/path', stu)

