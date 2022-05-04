const express = require('express');
const ProductQuestionsCollection = require('../models/ProductQuestionsCollection');
const router = express.Router();


router.get('/:ProductID/:Sort', async (req, res) => {

    const ProductID = req.params.ProductID;
    const Sort = req.params.Sort;
    const QuestionsSearch = req.query.searchText;
    try {
        const cursor = ProductQuestionsCollection.find({
            ProductId: ProductID,
            Question: new RegExp(QuestionsSearch, 'gi'),

        }).sort({ Dates: Sort });
        const Questions = await cursor;
        res.send({ Questions });
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;