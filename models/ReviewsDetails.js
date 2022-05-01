const mongoose = require("mongoose");
let ReviewDetailsSchema = new mongoose.Schema({
    ProductId: {
        type: String,
        required: true
    },

    UserId: {
        type: String,
        required: true
    },


    CustomerName: {
        type: String,
        required: true
    },


    CustomerPhotoUrl: {
        type: String
    },

    Title: {
        type: String,
        required: true
    },


    Details: {
        type: String,
        required: true
    },


    Rating: {
        type: Number,
        required: true
    },

    Date: {
        type: Number,
        required: true
    }

}, {
    collection: "ReviewsDetails"
})

module.exports = mongoose.model("ReviewsDetails", ReviewDetailsSchema);