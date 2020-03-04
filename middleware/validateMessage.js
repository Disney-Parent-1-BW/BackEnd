const messages = require("../messages/messages-model");

function validateMessage(req, res, next)
{
    const id = req.params.id
    messages.validMessageId(id)
    .then(message =>
    {
        if(message)
        {
            req.message = message;
            next();
        }
        else
        {
            res.status(404).json({message: 'not found'});
        }
    })
}

module.exports = validateMessage;