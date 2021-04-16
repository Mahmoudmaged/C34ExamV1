const userModel = require('../../model/user.model');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports= async(req,res)=>{

    const {fname,lname,uname,email,password,Cpassword}= req.body;
    const validatinError = validationResult(req);
    if(validatinError.isEmpty()){
      const user= await userModel.findOne({email});
      if(user){
       req.flash("existEmail",'true');
       req.flash("oldInputs",{fname,lname,uname,email,password,Cpassword});
        res.redirect("/")
      }else{
      await  bcrypt.hash(password, 8,  async (err, hash)=> {
          if(err){
            console.log("fail");
            res.redirect("/");
          }else{
             await userModel.insertMany({fname,lname,uname,email,password:hash});
            res.redirect("/");
          }
        });
      }

    }else{
       req.flash("errors",validatinError.errors);
       req.flash("oldInputs",{fname,lname,uname,email,password,Cpassword});
      res.redirect("/")
    }
  }