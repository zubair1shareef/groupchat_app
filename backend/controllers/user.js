const User=require('../models/user')
const bcrypt=require('bcrypt')
const saltRounds=10

exports.createUser = async (req, res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    console.log(phonenumber);
    const password = req.body.password;
    await User.findAll({ where: { email } })
    .then((ress) => {
        if (ress.length > 0) {
          return    res.json({ msg: "User already exists, Please Login" });
        }
        
        bcrypt.hash(password, saltRounds, function (err, hash) {
          
          User.create({
              name: name,
              email: email,
              phoneno: +phonenumber,
              password: hash,
            })
              .then(() => {
                res.json({
                  name: req.body.name,
                  email: req.body.email,
                 
                  msg: "Successfuly signed up",
                });
              })
              .catch((err) => {
                console.log(err);
              });
        });
       
      })
      .catch((err) => {
        console.log(err);
      });
}