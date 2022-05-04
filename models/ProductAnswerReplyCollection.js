const mongoose = require("mongoose");
let ProductAnswerReplyCollectionSchema = new mongoose.Schema({
    AnswerId: {
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

    Reply: {
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
    collection: "ProductAnswerReplyCollection"
})

module.exports = mongoose.model("ProductAnswerReplyCollection", ProductAnswerReplyCollectionSchema);