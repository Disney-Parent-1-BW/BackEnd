const jwt = require('jsonwebtoken');

const { jwtSecret } = require("../config/secrets");

function createToken(user)
{
    const payload = {
        username: user.username,
        id: user.id
    };

    const options = {
        expiresIn: '1hr'
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = createToken;