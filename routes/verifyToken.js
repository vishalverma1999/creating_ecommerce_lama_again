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

// example for order or product only admin can add any product so it means we should create another function here and it's gonna be verifyTokenAndAdmin
const verifyTokenAndAdmin = (req, res, next) => {

    // we have next here, remember we can write any function here
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that! , webtoken id and id of the client not matched and also you are not the admin");
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };