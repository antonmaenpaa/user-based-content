function adminAccess(req, res, next) {
    if(req.session.role === "admin") {
        next()   
    }
    else {
        res.status(403).json("You are not Admin!!!!")
    }
}

module.exports = adminAccess;