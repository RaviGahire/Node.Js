const movieSchema = require('../model/movieSchema');

exports.Movies = async (req, res) => {
    try {
        const moviesdata = await movieSchema.find()

        res.render('moviedetails.ejs', { data: moviesdata })


    } catch (error) {
        console.log(error)

    }

}