import { join } from 'path'

const homeController = (req,res)=>{
  // res.sendFile(join(process.cwd(),'views','index.html'))
  res.render('index.ejs', {'firstName':'Tanvir','lastName':'Ahmed'})
}

const aboutController = (req,res)=>{
  // res.sendFile(join(process.cwd(),'views','about.html'))
  res.render('about.ejs', {'firstName':'Sadia','lastName':'Hatun'})
}

const serviceController = (req,res)=>{
  // res.sendFile(join(process.cwd(),'views','service.html'))
  res.render('service.ejs',{'firstName':'Maymuna','lastName':'Ahmed'})
}

const contactController = (req,res)=>{
  // res.sendFile(join(process.cwd(),'views','contact.html'))
  res.render('contact.ejs',{'firstName':'Ayesha','lastName':'Akter'})
}

export {homeController,aboutController,serviceController,contactController}


