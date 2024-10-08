import { join } from 'path'

const homeController = (req,res)=>{
  res.sendFile(join(process.cwd(),'views','home.html'))
}

export {homeController}