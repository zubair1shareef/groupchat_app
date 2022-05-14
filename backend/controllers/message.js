const express=require('express');
const Message=require('../models/messages')

exports.addMeassage=(req,res)=>{4
    let msg=req.body.msg
    console.log(req.user.name)
    req.user.createMessage({
        
        msg:msg,
        username:req.user.name

    }).then(ress=>{
       res.status(200).json("message added")
    })
    .catch(err=>{
        console.error(err)
    })
}

exports.getMeassages=(req,res)=>{
    
    Message.findAll().then(msgs=>{
        userdata=msgs.data
        console.log(userdata)
        res.json(msgs)
    })
    .catch(err=>{
        console.error(err)
    })

}