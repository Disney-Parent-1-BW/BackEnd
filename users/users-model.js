const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    update,
    remove
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findBy({id});
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