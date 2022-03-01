const mongoose = require("mongoose");
let productDetailsSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },

    ProductPhoto: {
        type: Array,
        required: true
    },

    CategoryName: {
        type: String,
        required: true
    },

    SubCategory: {
        type: String,
        required: true
    },

    Brand: {
        type: String,
        required: true
    },

    CurrentPrice: {
        type: Number,
        required: true
    },

    PreviousPrice: {
        type: Number,
        required: true
    },

    ProductRating: {
        type: Number,
        required: true
    },


    NumberOfRaters: {
        type: Number,
        required: true
    },

    TotalUnits: {
        type: Number,
        required: true
    },

    SoldUnits: {
        type: Number,
        required: true
    }

}, {
    collection: "ProductDetailsCollection"
})

module.exports = mongoose.model("ProductDetailsCollection", productDetailsSchema);