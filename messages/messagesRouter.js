const express = require('express');
const router = express.Router();
const messages = require('./messages-model');

//get all messages
router.get('/', (req, res) =>
{
    messages.getMessages()
    .then(messages =>
    {
        res.status(200).json(messages);
    })
    .catch(error => res.status(500).json(error));
})
//get message by id
router.get('/:id', (req, res) =>
{
    const id = req.params.id
    messages.getMessageById(id)
    .then(message =>
    {
        res.status(200).json(message)
    })
})
//update message
//delete message


module.exports = router;