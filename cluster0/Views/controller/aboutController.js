import {join} from 'path'

const aboutController = (req,res)=>{
  console.log(join(process.cwd(),'views','about.html')) // D:\Express Js\cluster0\Views\views\about.html
  res.sendFile(join(process.cwd(),'views','about.html'))
}

export {aboutController}



// const aboutController = (req,res)=>{
//   res.sendFile('D:\\Express Js\\cluster0\\Views\\views\\about.html')
// }

// export {aboutController}
