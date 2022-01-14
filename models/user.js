const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null
    },
    createdAt: {
        type: Date,
        required: false,
        default: new Date
    }
});

const Model = mongoose.model('Users', UserSchema);

module.exports = Model;