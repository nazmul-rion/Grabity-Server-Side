const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;
let categorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },

    CategoryIcon: {
        type: String,
        required: true
    }

}, {
    collection: "CategoriesCollection"
})

module.exports = mongoose.model("CategoriesCollection", categorySchema);