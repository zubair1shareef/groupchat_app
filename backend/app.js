require('dotenv').config()
const express=require('express');
const app=express()
const sequelize=require('./utils/db')
var cors = require('cors')
const userRoute=require('./routes/user')


app.use(cors())
app.use(express.json());
app.use(userRoute)

app.use('/',(req,res)=>{
    console.log('working')
})


sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)