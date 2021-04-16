const  app = require('express').Router();
const auth= require("../middleware/auth");

/*======================================Satrt SignUp ===============================================*/
//display
const displaySignUpContrroller = require("../controller/signUp/displaySignUp");
app.get('/',displaySignUpContrroller);
// handelSignUp
const handelSignUpContrroller = require("../controller/signUp/handelSignUpContrroller");
const signUpValidation =require('../middleware/signUp.validator');
app.post('/handelSignUp', signUpValidation, handelSignUpContrroller);

/*=======================================Satrt SignUp ====================================*/
/*======================================Satrt Login ===============================================*/
//displaySignIN
const diplayLoginController = require("../controller/signIn/displaySignIn");
app.get('/login',diplayLoginController);
//handelSignIn
const handelSignInController = require("../controller/signIn/handelSigIn.cortoller");
const signInValidation = require("../middleware/signIn.validators");
app.post('/handelSignIn',signInValidation,handelSignInController);
/*======================================End Login ===============================================*/
/*======================================Satrt Home Page ===============================================*/

//displayHome
const displayHomeController = require("../controller/home/displayHome.controller");
app.get('/home', auth, displayHomeController);
//add New Post
const handelPostController = require("../controller/home/handelPost.Controller");
app.post("/handelPost", auth, handelPostController);
/*======================================End Home Page ===============================================*/
/*======================================Satrt Profile Page ===============================================*/
const displayProfileController = require("../controller/profile/displayProfile.controller");
app.get('/profile', auth, displayProfileController);
//Delete Post
const handelDeletePostController = require("../controller/profile/handelDeletePost.Controller");
app.post("/handelDeletePost", auth, handelDeletePostController);
//update Post
const handelUpdatePostController = require("../controller/profile/handelUpdatePost.Controller");
app.post('/handelUpdatePost', auth , handelUpdatePostController);
/*======================================End Profile Page ===============================================*/
/*======================================Satrt Profilesitting Page ===============================================*/
const displayProfileSittingController = require("../controller/profile/displayProfileSitting.controller");
app.get('/profileSitting', auth, displayProfileSittingController);
const updatePasswordController = require("../controller/profile/updatePassword.Controller");
const updatePasswordvalidation = require("../middleware/updatePassword.valitaors");
app.post('/handelUpdatePassword', auth, updatePasswordvalidation,updatePasswordController);
/*======================================End Profilesitting Page ===============================================*/


app.get("/logout",auth,(req,res)=>{
    req.session.destroy(()=>{
        console.log("session closed");
        res.redirect("/login");
    })
})

module.exports=app;