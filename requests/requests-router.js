const express = require("express");
const Requests = require("./requests-model");
const router = express.Router();


//getting a list of requests
router.get("/", (req, res) => {
    Requests.find()
    .then(requests => {
        res.json(requests);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve requests' });
    })
})

//posting  new request
router.post("/", (req, res) => {
    Requests.insert(req.body)
        .then(request => {
            res.status(201).json(request)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error posting new request" })
        })
});



