const router = require("express").Router();
const review = require("../models/reviewForm");

//Create POST method

router.post('/', async (req, res) => {
    const newReview = new review(req.body);
    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    }catch (err) {
        res.status(500).json(err);
    }
});

//Create GET method
router.get('/', async(req, res) => {
    try {
        const current = await review.find();
        res.status(200).json(current);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;