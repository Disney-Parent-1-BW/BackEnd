const express = require('express');
const router = express.Router();
const messages = require('./messages-model');

//get all messages for the accepted request
router.get('/:id/messages', (req, res) =>
{

})
//post message for the accepted request
router.post('/:id/messages', (req, res) =>
{

})

//get all messages
router.get('/messages', (req, res) =>
{
    messages.getMessages()
    .then(messages =>
    {
        res.status(200).json(messages);
    })
    .catch(error => res.status(500).json(error));
})

//get message by id
router.get('/messages/:id', (req, res) =>
{
    const id = req.params.id
    messages.getMessageById(id)
    .then(message =>
    {
        res.status(200).json(message)
    })
    .catch(error => res.status(500).json(error));
})

//update message
router.put('/messages', (req, res) =>
{

})

//delete message
router.delete('/messages/:id', (req, res) =>
{
    const id = req.params.id;
    messages.deleteMessage(id)
    .then(deleted =>
    {
        res.status(200).json({message: `Message with id of ${id} has been deleted`});
    })
    .catch(error => res.status(500).json(error));
})


module.exports = router;