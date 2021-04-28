
function userLoggedIn(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json("You must login")
}

module.exports = userLoggedIn;