const allStudent = (req,res)=>{
  res.send('All Student Page')
}

const deleteStudent = (req,res)=>{
  console.log(req.params)
  const {id} = req.params
  console.log(id)
  if(id==10){
    return res.send('This is Tanvir')
  } else if(id==20){
    return res.send('This is Sadia')
  }
  return res.send('UnKnown Student!')
}

export {allStudent, deleteStudent}