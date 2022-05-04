const mongoose = require("mongoose");
let ProductAnswerCollectionSchema = new mongoose.Schema({
    QuestionId: {
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

    Answer: {
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
    collection: "ProductAnswerCollection"
})

module.exports = mongoose.model("ProductAnswerCollection", ProductAnswerCollectionSchema);