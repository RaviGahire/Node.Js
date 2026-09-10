const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "fullname": {
        type: String,
        // unique: true
    },
    "email": {
        type: String,
        unique: true
    },
    "password": String,
    "confirm_password": String,
    "createdAt": {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Insta", userSchema, "Insta")