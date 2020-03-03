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

//getting request by id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Requests.findById(id)
    .then(request => {
        if(request) {
            res.json(request);
        } else {
            res.status(404).json({ message: 'could not find request with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get requests' });
    });
});

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

//editing a request
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Requests.findById(id)
    .then(request => {
        if(request) {
            Requests.update(changes, id)
            .then(updatedRequest => {
                res.json(updatedRequest);
            });
        } else {
            res.status(404).json({ message: "could not find request with that id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "failed to update request" });
    });
});

//deleting a request
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Requests.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ removed: deleted })
        } else {
            res.status(404).json({ message: "could not find request with that id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to delete request'})
    })
})

module.exports = router;

