const express = require('express');
const router = express.Router();
const messages = require('./messages-model');
const validateMessage = require('../middleware/validateMessage');
const acceptedRequests = require('../acceptedRequests/acceptedRequests-model');

//add an accepted request
router.post('/', (req, res) =>
{
    const request = {
        request_id: req.body.request_id,
        accepted_by: req.body.accepted_by
    };

    acceptedRequests.addAcceptedRequest(request)
    .then(newRequest =>
    {
        res.status(201).json(newRequest);
    })
    .catch(error => res.status(500).json(error));
})

router.get('/:id', (req, res) =>
{
    acceptedRequests.getAcceptedRequest(req.params.id)
    .then(request =>
    {
        res.status(200).json(request);
    })
    .catch(error => res.status(500).json(error))
})

//get all messages for the accepted request
router.get('/:id/messages', (req, res) =>
{
    const id = req.params.id;
    messages.getAcceptedRequestMessages(id)
    .then(messages =>
    {
        res.status(200).json(messages);
    })
    .catch(error => res.status(500).json(error));
})

//post message for the accepted request
router.post('/:id/messages', (req, res) =>
{
    const id = req.params.id;
    const message = {
        accepted_request_id: id,
        message: req.body.message,
        sent_by: req.body.sent_by
    }

    messages.addMessage(message)
    .then(conversation =>
    {
        res.status(201).json(conversation);
    })
    .catch(error => res.status(500).json(error));
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
router.put('/messages/:id', validateMessage, (req, res) =>
{
    const originalMessage = req.message;
    const changes = {
        accepted_request_id: originalMessage.accepted_request_id,
        message: req.body.message ? req.body.message : originalMessage.message,
        sent_by: originalMessage.sent_by
    };

    // console.log(changes);
    messages.updateMessage(changes, req.params.id)
    .then(updatedMessage =>
    {
        res.status(200).json(updatedMessage);
    })
    .catch(error => res.status(500).json(error));
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