import express from "express";

const router = express.Router()

router.get('/product/:category/and/:id', (req,res)=>{
  const {category,id} = req.params 
  res.send(`Category : ${category} and Id : ${id}`)
})

router.get('/train/:from-:to',(req,res)=>{
  const {from,to} = req.params
  res.send(`From : ${from} and To : ${to}`)
})

router.get('/train/:from.:to',(req,res)=>{
  const {from,to} = req.params
  res.send(`From : ${from} and To : ${to}`)
})

export default router