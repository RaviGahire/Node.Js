const movieSchema = require('../model/movieSchema');

exports.Editmoviedata = async (req, res) => {


    try {
        const id = req.params.id
        const edit = await movieSchema.findById(id)

        res.render('editmovie.ejs', { data: edit })
 res.send(`
            <script>
            window.location.href = '/moviedata'
            </script>
            `)

    } catch (error) {
        console.log(error)

    }


}