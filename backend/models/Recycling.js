const mongoose = require('mongoose');

const RecyclingSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: true
        },
        tradeQuantity: {
            type: Number,
            required: true
        },
        milesQuantity: {
            type: Number,
            requried: true
        },
        brandName: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('RecyclingStation', RecyclingSchema);