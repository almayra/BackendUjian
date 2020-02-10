const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

//Cretae App
const app=express()

//test connection databse
const db=require('./connection')
db.connect(err=>{
    if(err) throw err;
    console.log('mysql connected')
})

//set middleware (req.body)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set cors buat akses ke backend
app.use(cors())

//set route (setting API backend)
const {userRouter}=require('./routes')
app.get('/', (req,res)=> res.send('Hello from backend'))
app.use('/users', userRouter)


//set port
const PORT=process.env.PORT||1975
app.listen(PORT, console.log(`Server running on port : ${PORT}`))