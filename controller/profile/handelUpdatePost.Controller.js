const postModel = require("../../model/post.mode");
module.exports= async(req,res)=>{
    const {title,desc}= req.body;
    let time = new Date()
    time = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
    await postModel.findByIdAndUpdate({_id:req.body.id},{title,desc,time})
    res.redirect("/profile");
}