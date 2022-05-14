const express=require('express');


exports.addMeassage=(req,res)=>{4
    let msg=req.body.msg
    console.log(req.user)
    req.user.createMessage({
        
        msg:msg

    }).then(ress=>{
       res.status(200).json("message added")
    })
    .catch(err=>{
        console.error(err)
    })
}