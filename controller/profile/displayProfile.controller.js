const postModel = require('../../model/post.mode');

module.exports = async(req,res)=>{
    const userID = req.session.userID;
    const userName = req.session.userName;
    const postsData = await postModel.find({userID}).populate('userID');
    res.render("profile", { userID, userName, postsData })
}