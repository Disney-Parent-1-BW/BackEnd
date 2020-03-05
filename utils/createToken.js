const jwt = require('jsonwebtoken');

const { jwtSecret } = require("../config/secrets");

function createToken(user)
{
    const payload = {
        user_id: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1hr'
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = createToken;