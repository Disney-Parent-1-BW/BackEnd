const db = require("../data/dbConfig");

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db("user_ratings");
}

function findById(id) {
    return db("user_ratings")
    .where({ id })
}

function add(ratingData) {
    return db("user_ratings")
    .insert(ratingData)
    .then(ids => {
      db("user_ratings")
        .where({ id: ids[0] })
    })
  }

function remove(id) {
    return db("user_ratings")
    .where("id", id)
    .del()
}