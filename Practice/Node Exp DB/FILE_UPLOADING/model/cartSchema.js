const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    "proName":String,
    "proCategory":String,
    "proImage":String,
})

module.exports = mongoose.model('CART',cartSchema,"CART")