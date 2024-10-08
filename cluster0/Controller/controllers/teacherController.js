const allTeacher = (req,res)=>{
  res.send('All Teacher Page')
}

const deleteTeacher = (req,res)=>{
  console.log(req.params)
  const {id} = req.params
  console.log(id)
  if(id==10){
    return res.send('This is Tanvir')
  }else if(id==22){
    return res.send('This is Sadia')
  }
  return res.send('Unknown Public Deleted!')
}

export {allTeacher,deleteTeacher}