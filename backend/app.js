require('dotenv').config()
const express=require('express');
const app=express()
const sequelize=require('./utils/db')
var cors = require('cors')


//routes req
const userRoute=require('./routes/user')
const messageRoute=require('./routes/message')
const groupRoute=require('./routes/group')


//models
const User=require('./models/user')
const Message=require('./models/messages')
const Group=require('./models/Group')


//middlewares
app.use(cors())
app.use(express.json());

//routes middlerwares
app.use(userRoute)
app.use(messageRoute)
app.use(groupRoute)


//association
User.hasMany(Message)
Message.belongsTo(User);

User.hasMany(Group)
Group.belongsTo(User);


app.use('/',(req,res)=>{
    console.log('working')
})


//  sequelize.sync({force:true})
  sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)