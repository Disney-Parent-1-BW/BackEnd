const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model");
const createToken = require("../utils/createToken");

router.post("/register", (req, res) => {
    let user = req.body;
    // hash #: 8 for development only
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const newUser = saved[0];
            if(newUser.isProvider === 0)
            {
                newUser.isProvider = false;
            }
            else
            {
                newUser.isProvider = true;
            }
            
            res.status(201).json(newUser);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/login", (req, res) =>
{
    const {username, password} = req.body;
    Users.findBy({username}).first()
    .then(user =>
    {
        if(user && bcrypt.compareSync(password, user.password))
        {
            if(user.isProvider === 0)
            {
                user.isProvider = false;
            }
            else
            {
                user.isProvider = true;
            }
            const token = createToken(user);
            res.status(200).json({user, token});
        }
        else
        {
            res.status(400).json({error: "username or password is invalid"});
        }
    })
    .catch(error =>
    {
        res.status(500).json(error);
    })
})

module.exports = router;