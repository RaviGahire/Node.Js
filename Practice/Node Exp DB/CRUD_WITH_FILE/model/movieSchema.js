const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    "movieTitle": String,
    "director": String,
    "genre": String,
    "releaseDate": String,
    "boxOfficeStatus": String,
    "duration": Number,
    "rating": Number,
    "synopsis": String,
    "posterUpload":String,
    "createdAt":{
        type: Date,
        default:Date.now()

    }
})

// module.exports 
module.exports = mongoose.model('newmoviesdata', movieSchema , 'newmoviesdata')