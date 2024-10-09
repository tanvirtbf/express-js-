import { join } from 'path'

const homeController = (req,res)=>{
  res.render('index.ejs')
}
const aboutController = (req,res)=>{
  console.log(join(process.cwd(),'views','about.html'))
  res.sendFile(join(process.cwd(),'views','about.html'))
}
const contactController = (req,res)=>{
  res.render('contact.ejs', { 'name':'Tanvir Ahmed' , 'age':25 })
}

export {homeController, aboutController,contactController}