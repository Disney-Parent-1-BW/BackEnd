const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('users').select('id', 'username', 'password', 'name', 'isProvider');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function update(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
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
  