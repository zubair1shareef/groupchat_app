const sequelize=require('../utils/db')
const Sequelize=require('sequelize')

const Message=sequelize.define('message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    msg:{
        type:Sequelize.STRING,

    }
})
module.exports=Message