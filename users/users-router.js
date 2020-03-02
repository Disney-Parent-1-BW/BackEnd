const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.findById(id)
    .then(user => {
        if(user) {
            Users.update(changes, id)
            .then(updatedUser => {
                res.json(updatedUser);
            });
        } else {
            res.status(404).json({ message: 'could not find that user'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to update user' })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'cold not delete that user' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to delete users'})
    });
});

module.exports = router;
