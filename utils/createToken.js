const jwt = require('jsonwebtoken');

const { jwtSecret } = require("../config/secrets");

function createToken(user)
{
    const payload = {
        username: user.username
    };

    const options = {
        expiresIn: '1hr'
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = createToken;