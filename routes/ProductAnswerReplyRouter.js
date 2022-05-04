const express = require('express');
const ProductAnswerReplyCollection = require('../models/ProductAnswerReplyCollection');
const router = express.Router();

// getting all reply by AnswerId
router.get('/:AnswerID', async (req, res) => {

    const AnswerID = req.params.AnswerID;
    try {
        const cursor = ProductAnswerReplyCollection.find({
            AnswerId: AnswerID,
        }).sort({ Dates: -1 });
        const AnswerReplies = await cursor;
        res.send({ AnswerReplies });
    } catch (error) {
        res.send(error);
    }
})


// add reply by AnswerId
router.post('/', async (req, res) => {


    const result = await ProductAnswerReplyCollection.create(req.body);
    res.json(result);
});


module.exports = router;