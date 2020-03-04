const db = require('../data/dbConfig');

function getMessages()
{
    return db.select('messages.id','accepted_request_id', 'message', 'users.name as sent_by')
        .from('messages')
        .join('users', 'messages.sent_by', 'users.id');
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