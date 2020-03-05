const db = require('../data/dbConfig');

async function addAcceptedRequest(request)
{
    const [id] = await db('accepted_requests').insert(request, 'id');
    const response = await getAcceptedRequestId(id);

    return response;
}

async function getAcceptedRequest()
{
    const request = await db.select('requests.id', 'requests.location','requests.time', 'users.name')
        .from('requests')
        .join('users', 'requests.requestor_id', 'users.id')
        // .where('requests.id', id)

    const acceptedBy = await db.select('users.name')
        .from('accepted_requests')
        .join('users', 'accepted_requests.accepted_by', 'users.id')
        // .where('request_id', id)


   const response = request.map((r, index) =>
    {
       return {request: r, acceptedBy: acceptedBy[index]}
    });

    return response
}

async function getAcceptedRequestId(id)
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

async function checkAccepted(id)
{
    const [request] = await db('accepted_requests').where({request_id: id});
    return request;
}

module.exports = {
    addAcceptedRequest,
    getAcceptedRequest,
    getAcceptedRequestId,
    checkAccepted
}