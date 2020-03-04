const express = require("express");
const Ratings = require("./ratings-model");
const router = express.Router();

//getting a list of all ratings
router.get("/", (req, res) => {
    Ratings.find()
    .then(ratings => {
        res.json(ratings);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve ratings' });
    })
})