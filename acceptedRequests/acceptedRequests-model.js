const db = require('../data/dbConfig');

async function addAcceptedRequest(request)
{
    const [id] = await db('accepted_requests').insert(request, 'id');
    const response = await getAcceptedRequest(id);

    return response;
}

async function getAcceptedRequest(id)
{
    const [request] = await db.select('requests.id', 'requests.location','requests.time', 'users.name')
        .from('requests')
        .join('users', 'requests.requestor_id', 'users.id')
        .where('requests.id', id)

    const [acceptedBy] = await db.select('users.name')
        .from('accepted_requests')
        .join('users', 'accepted_requests.accepted_by', 'users.id')
        .where('request_id', id)

    const response = {
        request,
        acceptedBy
    };

   return response;
}

module.exports = {
    addAcceptedRequest,
    getAcceptedRequest
}