
module.exports = async (req, res) => {
    const userID = req.session.userID;
    const userName = req.session.userName;
    let oldInputs = req.flash("oldInputsPassword")[0];
    if (oldInputs == undefined) {
        oldInputs = {
            oldPassword: "",
            newPassword: '',
            CPassword: ''
        }
    }
    res.render("acount_setting", {
        userID, userName,
        errors: req.flash("errorValidation"), oldInputs,
        wrongPass: req.flash("wrongPass")
    })
}