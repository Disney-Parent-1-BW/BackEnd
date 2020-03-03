const db = require("../data/dbConfig");

module.exports={
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db("requests")
}

function findById(id) {
    return db("requests")
    .where({id: Number(id) });
}

function add(request) {
    // schemeData
    return db("requests")
    .insert(request, "id")
    .then(([id]) => get(id)); 
}

function update(id, changes) {
    return db("requests")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("requests")
    .where("id", id)
    .del()
}