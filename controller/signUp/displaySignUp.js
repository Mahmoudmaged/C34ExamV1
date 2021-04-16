
module.exports=async (req,res)=>{
  let oldInputs=req.flash("oldInputs")[0];
  if(oldInputs==undefined){
    oldInputs={
      fname:'',
      lname:"",
      uname:'',
      email:'',
      password:'',
      Cpassword:''
    }
  }
       
       res.render("registration" ,{errors:req.flash("errors"),oldInputs,emailExist:req.flash("existEmail")})
}