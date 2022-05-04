const express = require('express');
const ProductAnswerCollection = require('../models/ProductAnswerCollection');
const router = express.Router();


router.get('/:QuestionID', async (req, res) => {

    const QuestionID = req.params.QuestionID;
    try {
        const cursor = ProductAnswerCollection.find({
            QuestionId: QuestionID,
        }).sort({ Dates: -1 });
        const Answers = await cursor;
        res.send({ Answers });
    } catch (error) {
        res.send(error);
    }
})


// add Answer by QuestionID
router.post('/', async (req, res) => {


    const result = await ProductAnswerCollection.create(req.body);
    res.json(result);
});


module.exports = router;