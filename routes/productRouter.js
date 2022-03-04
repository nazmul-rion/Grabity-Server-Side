const express = require('express');
const router = express.Router();
const ProductDetailsCollection = require("../models/ProductDetailsCollection");

router.get('/', async (req, res) => {

    try {

        const pageNumber = parseInt(req.query.pageNumber);
        const pageSize = parseInt(req.query.pageSize);
        const startIndex = (pageNumber * pageSize);
        const totalProductCount = await ProductDetailsCollection.countDocuments({});
        if (pageNumber >= 0) {
            const cursor = ProductDetailsCollection.find({}).skip(startIndex).limit(pageSize).sort({ _id: -1 });
            const Product = await cursor;
            res.send(Product);
        }
        else {
            const cursor = ProductDetailsCollection.find({});
            const Product = await cursor;
            res.send(Product);
        }

    } catch (error) {
        res.send(error);
    }
})

module.exports = router;