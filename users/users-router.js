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

router.get("/:id", (req, res) =>
{
    const id = req.params.id;
    Users.findBy({id})
    .then(user =>
    {
        user = user[0];
        if(user)
        {
            if(user.isProvider === 0)
            {
                user.isProvider = false;
            }
            else
            {
                user.isProvider = true
            }

            res.status(200).json(user);
        }
        else
        {
            res.status(404).json({message: 'user not found'});
        }
    })
    .catch(error =>
    {
        res.status(500).json(error);
    })

})

router.put('/:id', (req, res) => {
    const changes = req.body;

    Users.update(req.params.id, changes)
    .then(count => {
        if(count > 0) {
            res.status(200).json(count);
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

//validates user
// function validateUser(req, res, next) {
//     const body = req.body;
//     if (body && body.name) {
//       next();
//     } else if (!body) {
//       res.status(400).json({ message: "missing user data"})
//     } else {
//       res.status(400).json({ message: "missing name field"})
//     }
//   }

module.exports = router;
