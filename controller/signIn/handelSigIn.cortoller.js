const userModel = require('../../model/user.model');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const errorsValidators = validationResult(req);
    console.log(errorsValidators);
    if (errorsValidators.isEmpty()) {

        const user = await userModel.findOne({ email });
        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                req.session.userID= user._id;
                req.session.userName= user.uname;
                res.redirect("/home");
            } else {
                req.flash("oldSignInInputs", { email, password });
                req.flash("wrongPassword", "true");
                res.redirect("/login");
            }
        } else {
            req.flash("emailNotExist", 'true');
            req.flash("oldSignInInputs", { email, password });
            res.redirect("/login");
        }

    } else {
        req.flash("oldSignInInputs", { email, password });
        req.flash("errorsValidators", errorsValidators.errors);
        res.redirect("/login")
    }
}