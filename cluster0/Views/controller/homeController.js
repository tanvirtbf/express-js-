import { join } from 'path'

const homeController = (req,res)=>{
  console.log(join(process.cwd(),'views','home.html')) // D:\Express Js\cluster0\Views\views\home.html
  res.sendFile(join(process.cwd(),'views','home.html'))
}

export {homeController}


// const homeController = (req,res)=>{
//   res.sendFile('D:\\Express Js\\cluster0\\Views\\views\\home.html')
// }

// export {homeController}