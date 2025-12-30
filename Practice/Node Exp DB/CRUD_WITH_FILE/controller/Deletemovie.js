const movieSchema = require('../model/movieSchema');

exports.Deletemovie = async (req, res) => {

    try {
        const id = req.params.id
        const deletedmovie = await movieSchema.findByIdAndDelete(id)
        console.log("Movie deleted successfully")

        res.send(`
            <script>
               window.location.href = '/moviedata'
               alret(' movie deleted successfully ')
            </script>
            `)


    } catch (error) {
        console.log(error)

    }


}