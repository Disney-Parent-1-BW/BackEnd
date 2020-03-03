const express = require('express');
const router = express.Router()
const kidsDb = require('./users-kids-model');
const validateKid = require('../middleware/validateKid')

router.get('/', (req, res) =>
{
    kidsDb.find()
    .then(kids =>
    {
        res.status(200).json(kids);
    })
    .catch(error => res.status(500).json(error));
})

router.delete('/:id', validateKid, (req, res) =>
{
    const id = req.params.id;
    kidsDb.removeKid(id)
    .then(deleted =>
    {
        res.status(200).json({message: `kid with id of ${id} has been deleted`})
    })
    .catch(error => res.status(500).json(error));
})

router.put('/:id', validateKid, (req, res) =>
{
    const id = req.params.id;
    const kid = req.kid;

    const changes = {
        name: req.body.name ? req.body.name : kid.name,
        special_instructions: req.body.special_instructions ? req.body.special_instructions : kid.special_instructions
    };
    
    kidsDb.updateKid(changes, id)
    .then(update =>
    {
        res.status(200).json(update);
    })
    .catch(error => res.status(500).json(error));
})

module.exports = router;