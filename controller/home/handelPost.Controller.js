const postModel = require("../../model/post.mode")
module.exports = async (req, res) => {
    const { title, desc } = req.body;
    let time = new Date()
    time = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()//s+time.getHours()+":"+time.getMinutes();
    await postModel.insertMany({ title, desc, time, userID: req.session.userID })
    res.redirect("/home");
}