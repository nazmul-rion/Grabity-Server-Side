const express = require('express');
const router = express.Router();
const CategoriesCollection = require("../models/CategoriesCollection");

router.get('/', async (req, res) => {

    try {
        const cursor = CategoriesCollection.find({});
        const Category = await cursor;
        res.send(Category);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;