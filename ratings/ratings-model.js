const db = require("../data/dbConfig");

module.exports = {
    find,
    // findById,
    // add,
    // update,
    // remove
}

function find() {
    return db("user_ratings");
}