const homeController = (req,res)=>{
  const data = {
    'name' : 'Sadia',
    'title': 'home page' // for dynamic title
  }
  res.render('index', data)
}

export { homeController }