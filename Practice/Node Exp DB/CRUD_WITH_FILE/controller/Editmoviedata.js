const movieSchema = require('../model/movieSchema');

exports.Editmoviedata = async (req, res) => {


    try {
        const id = req.params.id
        const editdata = await movieSchema.findById(id)
        res.render('editmovie.ejs', { data: editdata })
        console.log('Movie data updated sucessfully')

    } catch (error) {
        console.log('Error from edit movie data controller ')
        console.log(error)

    }


}