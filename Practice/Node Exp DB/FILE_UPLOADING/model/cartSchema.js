const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    "proName":String,
    "proCategory":String,
    "fileUpload":String,
})

module.exports = mongoose.model('CART',cartSchema,"CART")