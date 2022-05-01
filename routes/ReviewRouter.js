const express = require('express');
const router = express.Router();
const ReviewsDetails = require("../models/ReviewsDetails");

router.get('/:ProductID/:Sort', async (req, res) => {

    const ProductID = req.params.ProductID;
    const Sort = req.params.Sort;
    const ReviewSearch = req.query.searchText;
    try {
        const cursor = ReviewsDetails.find({
            ProductId: ProductID,
            $or: [
                { Title: new RegExp(ReviewSearch, 'gi') },
                { Details: new RegExp(ReviewSearch, 'gi') }
            ]
        }).sort({ Dates: Sort });
        const Reviews = await cursor;
        res.send({ Reviews });
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;