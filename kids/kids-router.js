const express = require('express');
const router = express.Router()
const kidsDb = require('./users-kids-model');

router.get('/', (req, res) =>
{
    kidsDb.find()
    .then(kids =>
    {
        res.status(200).json(kids);
    })
    .catch(error => res.status(500).json(error));
})

module.exports = router;