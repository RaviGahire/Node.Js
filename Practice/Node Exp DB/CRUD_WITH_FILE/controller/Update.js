const movieSchema = require('../model/movieSchema');


exports.Updatemovie = async (req, res) => {

    try {
        const id = req.params.id

        const edited_data = await movieSchema.findByIdAndUpdate(id, req.body)

        res.send(`
            <script>
            window.location.href = '/moviedata'
            </script>
            `)

    } catch (error) {
        console.log(error)
    }


}