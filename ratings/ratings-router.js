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

//getting a rating by id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Ratings.findById(id)
    .then(rating => {
        if(rating) {
            res.json(rating);
        } else {
            res.status(404).json({ message: 'Could not find rating with that id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get request'})
    })
});

//posting a new rating
router.post("/", (req, res) => {
    const ratingData = req.body;
    Ratings.add(ratingData)
    .then(rating => {
        res.status(201).json(rating)
    })
    .catch(err => {
    console.log("post rating error", err);
    res.status(500).json({ message: "Failed to post rating data" });
    });
  });

//removing a rating
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Ratings.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ removed: deleted })
        } else {
            res.status(404).json({ message: 'Could not find rating with that id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete rating' })
    })
})

module.exports = router;