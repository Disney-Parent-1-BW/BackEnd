const db = require('../data/dbConfig');

function getMessages()
{
    return db.select('messages.id','accepted_request_id', 'message', 'users.name as sent_by')
        .from('messages')
        .join('users', 'messages.sent_by', 'users.id');
}

function getMessageById(id)
{
    return db('messages').select('messages.id','accepted_request_id', 'message', 'users.name as sent_by')
        .from('messages')
        .join('users', 'messages.sent_by', 'users.id')
        .where('messages.id', id).first();
}

function updateMessage(changes, id)
{
    return db('messages').where({id}).update(changes);
}

function deleteMessage(id)
{
    return db('messages').where({id}).del();
}

function getAcceptedRequestMessages(id)
{
    return db('messages').select('messages.id','accepted_request_id', 'message', 'users.name as sent_by')
    .from('messages')
    .join('users', 'messages.sent_by', 'users.id')
    .where('messages.accepted_request_id', id);
}

async function addMessage(message)
{
    
    const [id] = await db('messages').insert(message, 'id');
    return getAcceptedRequestMessages(message.accepted_request_id);
}

module.exports = {
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage,
    getAcceptedRequestMessages,
    addMessage
}