const sequelize=require('../utils/db')
const Sequelize=require('sequelize')

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    email:{
        type:Sequelize.STRING,
        allowNull:false

    },
    phoneno:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    password:{
        type:Sequelize.STRING,
        allowNull:false

    }
})
module.exports=User