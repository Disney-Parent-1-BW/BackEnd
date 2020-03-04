const db = require('../data/dbConfig');

function getMessages()
{
    return db('messages');
}

function getMessageById(id)
{
    return db('messages').where({id});
}

function updateMessage(changes, id)
{
    return db('messages').where({id}).update(changes);
}

function deleteMessage(id)
{
    return db('messages').where({id}).del();
}

module.exports = {
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage
}