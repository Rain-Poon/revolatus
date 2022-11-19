const mongoose = require('mongoose');

const TierSchema = mongoose.Schema(
    {
        green: {
            type: Number,
            required: true
        },
        silver: {
            type: Number,
            required: true
        },
        gold: {
            type: Number,
            required: true
        },
        diamond: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('Tier', TierSchema);