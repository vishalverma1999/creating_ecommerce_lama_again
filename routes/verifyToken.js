const jwt = require("jsonwebtoken");  // importing jwt

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, process.env.JwT_SEC, (err, user) => {

            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    } else {
        res.status(401).json("You are not authenticated");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that! , webtoken ke andar ki id and id of the client(i.e params mein jo id hai) not matched and also you are not the admin");
        }
    })
};


module.exports = { verifyToken, verifyTokenAndAuthorization };