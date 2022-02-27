const express = require('express');
const router = express.Router();
const ProductDetailsCollection = require("../models/ProductDetailsCollection");

router.get('/', async (req, res) => {

    try {
        const cursor = ProductDetailsCollection.find({});
        const Product = await cursor;
        res.send(Product);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;