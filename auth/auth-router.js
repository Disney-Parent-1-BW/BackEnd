<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> 28f7b15bff2c47bc653315c6d440246afceac08f
=======
>>>>>>> bc1cf98beae86b25d68468567f00878a9f3b5c82
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");
<<<<<<< HEAD
<<<<<<< HEAD
const { jwtSecret } = require("../config/secrets");
=======
const createToken = require("../utils/createToken");
>>>>>>> 28f7b15bff2c47bc653315c6d440246afceac08f
=======
const createToken = require("../utils/createToken");
>>>>>>> bc1cf98beae86b25d68468567f00878a9f3b5c82

router.post("/register", (req, res) => {
    let user = req.body;
    // hash #: 8 for development only
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
=======
>>>>>>> bc1cf98beae86b25d68468567f00878a9f3b5c82
});

router.post("/login", (req, res) =>
{
    const {username, password} = req.body;
    Users.findBy({username}).first()
    then(user =>
    {
        if(user && bcrypt.compareSync(password, user.password))
        {
            const token = createToken(user);
            res.status(200).json(token);
        }
        else
        {
            res.status(400).json({error: "username or password is invalid"});
        }
    })
})
<<<<<<< HEAD
>>>>>>> 28f7b15bff2c47bc653315c6d440246afceac08f
=======
>>>>>>> bc1cf98beae86b25d68468567f00878a9f3b5c82
