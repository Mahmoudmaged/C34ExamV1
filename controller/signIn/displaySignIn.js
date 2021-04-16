module.exports = async (req, res) => {

    let oldInputs = req.flash("oldSignInInputs")[0];
    if (oldInputs == undefined) {
        oldInputs = {
            email: '',
            password: ''
        }
    }
    res.render("index", {
        errorsValidators: req.flash("errorsValidators"),
        emailNotExist: req.flash("emailNotExist"),
        oldInputs, wrongPassword: req.flash("wrongPassword"),
        loginSission: req.flash("loginFirst")
    })
}