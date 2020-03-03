const Users = require("../users/users-model");

function validateUser(req, res, next)
{
    const id = req.params.id
    Users.findBy({id})
    .then(user =>
    {
        if(user[0])
        {
            next();
        }
        else
        {
            res.status(404).json({message: 'user not found'});
        }
    })
}

module.exports = validateUser;