
function userLoggedIn(req, res, next) {
    if (req.session.userId) {
        console.log(req.session.role)
        return next();
    }
    res.status(401).json("You must login")
}

module.exports = userLoggedIn;