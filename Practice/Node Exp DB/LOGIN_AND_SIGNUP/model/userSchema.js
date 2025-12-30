const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    "fullname":{
        type:String,
        unique:true
    },
    "email":{
        try:String,
        unique:true
    },
    "Password":String,
    "createdAt":{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model("Insta_user", userSchema ,"Insta_user")