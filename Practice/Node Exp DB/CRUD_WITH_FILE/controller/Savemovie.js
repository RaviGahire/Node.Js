
const movieSchema = require('../model/movieSchema');

// Insert controller
exports.Savemovie = async (req, res) => {

    try {
     // Destructure
     const {movieTitle,director,genre,releaseDate,boxOfficeStatus,duration,rating,synopsis} = req.body;
     const posterUpload = req.file ?  req.file.filename : 'Poster not avilable ';

        const insert = new movieSchema({movieTitle,director,genre,releaseDate,boxOfficeStatus,duration,rating,synopsis,posterUpload})

        await insert.save()
        console.log('movie saved suceessfully ')
        res.send(`<script> 
    
    alert('You want to save ')
    window.location.href = '/moviedata'
    
    </script>`)


    } catch (error) {
        console.log(error)

    }

}