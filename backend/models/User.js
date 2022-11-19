const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        membershipID: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        miles: {
            type: Number,
            required: true
        },
        statusPoint: {
            type: Number,
            requried: true
        },
        history: {
            type: Array,
            required: true
        }
    }
);

module.exports = mongoose.model('User', UserSchema);