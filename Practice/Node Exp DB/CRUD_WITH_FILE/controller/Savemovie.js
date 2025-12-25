
const movieSchema = require('../model/movieSchema');

// Insert controller
exports.Savemovie = async (req, res) => {

    try {
        //   res.send(req.body)
        const insert = new movieSchema(req.body)
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