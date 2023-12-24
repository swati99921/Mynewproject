// console.log("hi  i am swati")


require('.dotenv').config()
const express =require('express')
const app = express()
const port = 4000
app.get('/',(req,res)=>{  // call back function
    res.send("hello word")
})

app.get('/twitter',(req,res)=>{
     res.send("i am swati")
})
app.get('/login',(req,res)=>{
res.send('<h1> please enter the code </h1>')
})


app.listen( process.env.PORT,()=>{
    console.log(`example app listening ${port}`)
})