const { fileLoader } = require('ejs');
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
    // "posterUpload":fileLoader,
})

// module.exports 
module.exports = mongoose.model('newmoviesdata', movieSchema , 'newmoviesdata')