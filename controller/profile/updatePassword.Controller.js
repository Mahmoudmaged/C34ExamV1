const userModel = require("../../model/user.model");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { oldPassword, newPassword, CPassword } = req.body;
    let errorValidation = validationResult(req);
    if (errorValidation.isEmpty()) {
        const user = await userModel.findOne({ _id: req.session.userID })
        if (user) {
            const match = await bcrypt.compare(oldPassword, user.password);
               if(match){
                await  bcrypt.hash(newPassword, 8,  async (err, hash)=> {
                    if(err){
                      console.log("fail");
                      res.redirect("/profileSitting");
                    }else{               
                         await userModel.findByIdAndUpdate({ _id: req.session.userID } ,{password:hash})
                         req.session.destroy(()=>{
                              res.redirect("/login");
                             });
                    }
                  });
               }else{
                   console.log("incorrectPASSWORD");
                   req.flash("wrongPass",'true');
                   req.flash("oldInputsPassword", { oldPassword, newPassword, CPassword });
                   res.redirect("/profileSitting")

               }
        } else {
            req.session.destroy(()=>{
                res.redirect("/login");
               });
        }
    } else {
        req.flash("errorValidation", errorValidation.errors);
        req.flash("oldInputsPassword", { oldPassword, newPassword, CPassword });
        res.redirect("/profileSitting")
    }

}