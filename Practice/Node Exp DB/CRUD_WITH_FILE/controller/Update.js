const movieSchema = require('../model/movieSchema');


exports.Updatemovie = async (req, res) => {

    try {
        const id = req.params.id
        // Destructure
        const posterUpload = req.file ? req.file.filename : 'Poster not avilable ';


        const { movieTitle, director, genre, releaseDate, boxOfficeStatus, duration, rating, synopsis } = req.body;


        // store data in object 
        const updatedData = {
            movieTitle: movieTitle,
            director: director,
            genre: genre,
            releaseDate: releaseDate,
            boxOfficeStatus: boxOfficeStatus,
            duration: duration,
            rating: rating,
            synopsis: synopsis,

        }
        if (req.file) {
            updatedData.posterUpload = posterUpload
        }

        const edited_data = await movieSchema.findByIdAndUpdate(id, updatedData)

        console.log('movie updated sccessfully ')
        res.send(`
            <script>
            window.location.href = '/moviedata'
            </script>
            `)

    } catch (error) {
        console.log('Error from update controller ')
        console.log(error)
    }


}