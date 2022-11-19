const mongoose = require('mongoose');

const RedemptionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        miles: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('Redemption', RedemptionSchema);