const postModel = require("../../model/post.mode");
module.exports= async(req,res)=>{

    await postModel.findOneAndDelete({_id:req.body.id})
    res.redirect("/profile");
}