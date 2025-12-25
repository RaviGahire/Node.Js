const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    "first_name": String,
    "last_name": String,
    "user_email": String,
    "phone_number": String,
    "birth_date": String,
    "gender": String,
    "street_address": String,
    "city": String,
    "state": String,
    "zip_code": Number,
    "user_bio": String,

})



// exports module 
// Create model
module.exports = mongoose.model('user', userSchema , 'newuserdata');




