const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getUserRequests,
    getUserRatings
};

function find() {
    return db('users').select('id', 'username', 'password', 'name', 'isProvider');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return findBy({id});
}

function update(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del()
}

function findById(id) {
    return db('users')
      .select('id', 'username')
      .where('id', id)
      .first();
  }

function getUserRequests(id) {
    return db("requests")
        .where("requestor_id", id)
}

function getUserRatings(id) {
    return db("user_ratings")
        .where("rating_for", id)
}
  