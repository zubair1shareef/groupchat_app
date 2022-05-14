require('dotenv').config()
const express=require('express');
const app=express()
const sequelize=require('./utils/db')
var cors = require('cors')


const userRoute=require('./routes/user')
const messageRoute=require('./routes/message')


const User=require('./models/user')
const Message=require('./models/messages')


app.use(cors())
app.use(express.json());
app.use(userRoute)
app.use(messageRoute)

User.hasMany(Message)
Message.belongsTo(User);



app.use('/',(req,res)=>{
    console.log('working')
})


// sequelize.sync({force:true})
 sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)