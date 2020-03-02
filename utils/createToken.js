const jwt = require('jsonwebtoken');

function createToken(user)
{
    const payload = {
        username: user.username
    };

    const options = {
        expiresIn: '1hr'
    };

    return jwt.sign(payload, process.env.JWTKEY, options);
}

module.exports = createToken;