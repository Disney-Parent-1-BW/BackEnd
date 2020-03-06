const db = require('../data/dbConfig');

function find()
{
    return db('users_kids');
}

async function addKids(kids, user_id)
{
   kids.forEach(async (kid) => {
       const child = {
           ...kid,
           user_id
       };
        const [id] = await db('users_kids').insert(child, 'id');
   });

  const userKids = await findUserKids(user_id);
  return userKids;
}

function findUserKids(user_id)
{
    return db('users_kids').where({user_id});
}

function findKidById(id)
{
    return db('users_kids').where({id}).first();
}

function removeKid(id)
{
    return db('users_kids').where({id}).del();
}

async function updateKid(changes, id)
{
    const count = await db('users_kids').where({id}).update(changes);
    return findKidById(id);
}


module.exports = {
    find,
    addKids,
    findKidById,
    findUserKids,
    removeKid,
    updateKid,
}