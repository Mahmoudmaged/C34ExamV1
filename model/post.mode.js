const mongoose = require('mongoose');
const postSchema= mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    time:{type:String},
    userID:{type:mongoose.Schema.Types.ObjectId , ref:'user'}
})
const postModel= mongoose.model("post",postSchema);
module.exports= postModel;