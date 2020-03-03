const db = require('../data/dbConfig');

function find()
{
    return db('users_kids');
}

function add(kid)
{
    return db('user_kids').insert(kid, 'id')
    .then(id =>
    {
        const [newId] = id
        return findById({newId}); 
    })
}

function findKidById(id)
{
    return db('users_kids').where(id, 'id').first();
}

function removeKid(id)
{
}

module.exports = {
    find,
    add,
    findKidById,
    removeKid
}