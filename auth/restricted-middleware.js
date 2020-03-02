const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");

module.exports = (req, res, next) => {
    const { Authorization } = req.headers;

    if (Authorization) {
        jwt.verify(Authorization, jwtSecret, (err, decodedToken) => {
            if(err) {
                console.log(err)
                res.status(401).json({ message: "Invalid Credentials" });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: "No Credentials Provided" });
    }
};