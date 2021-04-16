
const postModel = require('../../model/post.mode');
module.exports = async (req, res) => {
    const userID = req.session.userID;
    const userName = req.session.userName;
    const postsData = await postModel.find({}).populate('userID');
    res.render("home", { userID, userName, postsData })
}