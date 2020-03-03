const kidsDb = require('../kids/users-kids-model');
function validateKid(req, res, next)
{
    const id = req.params.id
    kidsDb.findKidById(id)
    .then(kid =>
    {
        if(kid)
        {
            req.kid = kid;
            next();
        }
        else
        {
            res.status(404).json({message: 'user not found'});
        }
    })
}

module.exports = validateKid;
