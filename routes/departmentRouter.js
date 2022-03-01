const express = require('express');
const router = express.Router();
const DepartmentListCollection = require("../models/DepartmentListCollection");

router.get('/', async (req, res) => {

    try {
        const cursor = DepartmentListCollection.find({});
        const Department = await cursor;
        res.send(Department);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;