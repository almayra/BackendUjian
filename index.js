const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const db=require('./connection')

//set cors buat akses ke backend
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const {movieRouter}=require('./routes')

//set route (setting API backend)
app.get('/', (req,res)=> res.send('Hello from backend'))
app.use('/movie', movieRouter)


//set port
const PORT=process.env.PORT||2020
app.listen(PORT, console.log(`Server running on port : ${PORT}`))