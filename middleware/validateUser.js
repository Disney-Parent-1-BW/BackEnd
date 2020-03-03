const Users = require("../users-model");

function validateUsers(user, req, res, next)
{
    const id = req.params.id
    Users.findById({id})
    .then(user =>
    {
        if(user)
        {
            next();
        }
        else
        {
            res.status(404).json({message: 'user not found'});
        }
    })
}

module.exports = validateUsers;