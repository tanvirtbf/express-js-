import { join } from 'path'

const homeController = (req,res)=>{
  res.sendFile(join(process.cwd(),'views','index.html'))
}

const aboutController = (req,res)=>{
  res.sendFile(join(process.cwd(),'views','about.html'))
}

const serviceController = (req,res)=>{
  res.sendFile(join(process.cwd(),'views','service.html'))
}

const contactController = (req,res)=>{
  res.sendFile(join(process.cwd(),'views','contact.html'))
}

export {homeController,aboutController,serviceController,contactController}


