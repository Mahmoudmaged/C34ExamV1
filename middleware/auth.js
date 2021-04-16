module.exports= async(req,res,next)=>{
    if(req.session.userID != undefined && req.session.userID != '' && req.session.userID != null){
       next();
    }else{
        req.flash("loginFirst",'true');
        res.redirect("/login")
    }

}