const express = require('express');
const router = express.Router()
const kidsDb = require('./users-kids-model');
const validateKid = require('../middleware/validateKid');
const validateUser = require('../middleware/validateUser');

router.get('/', (req, res) =>
{
    kidsDb.find()
    .then(kids =>
    {
        res.status(200).json(kids);
    })
    .catch(error => res.status(500).json(error));
})

//posting a new kid using current token
router.post('/', (req, res) =>
{
    const kidArray = [
        ...req.body, {user_id: req.decodedToken.id}
    ];
    console.log(kidArray.length)
    if(kidArray.length > 0)
    {
        kidsDb.addKids(kidArray, req.decodedToken.id)
        .then(newArray =>
        {
            res.status(201).json(newArray);
        })
        .catch(error => res.status(500).json(error));
    }
    else
    {
        res.status(400).json({message: 'no kids to put in the database'});
    }
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