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

    UpVote: {
        type: Array,
        required: true,
        default: []
    },
    DownVote: {
        type: Array,
        required: true,
        default: []
    },


    Dates: {
        type: Number,
        required: true,
        default: Date.now()
    }

}, {
    collection: "ReviewsDetails"
})

module.exports = mongoose.model("ReviewsDetails", ReviewDetailsSchema);