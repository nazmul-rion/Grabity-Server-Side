const mongoose = require("mongoose");
let ProductQuestionsCollectionSchema = new mongoose.Schema({
    ProductId: {
        type: String,
        required: true
    },

    UserId: {
        type: String,
        required: true
    },


    UserName: {
        type: String,
        required: true
    },


    UserPhotoUrl: {
        type: String
    },

    Question: {
        type: String,
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
    collection: "ProductQuestionsCollection"
})

module.exports = mongoose.model("ProductQuestionsCollection", ProductQuestionsCollectionSchema);