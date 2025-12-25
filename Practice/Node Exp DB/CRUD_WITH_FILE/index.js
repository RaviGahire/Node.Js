const express = require('express');
const app = express();
// const url = require('url');

//ENV FILE
require('dotenv').config()

// middlewares
app.use(express.static('public/'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

// import controllers 
const { Addmovie } = require('./controller/Addmovie')
//Routes 
app.get('/', Addmovie)

// import module database connection 
const connectDB = require('./config/connectDB')

// import movies schema
const movieSchema = require('./model/movieSchema');
const { default: mongoose } = require('mongoose');


// data insert operation 
app.post('/savemovie', async (req, res) => {

    try {
        //   res.send(req.body)
        const insert =  new movieSchema(req.body)
       await insert.save()
        console.log('movie saved suceessfully ')
        res.send(`<script> 
    
    alert('You want to save ')
    window.location.href = '/'
    
    </script>`)


    } catch (error) {
        console.log(error)

    }

})



// Fallback

const port = 3000
const host = '127.0.0.1'

app.listen(port, host, () => {
    console.log(`Server runing on http://${host}:${port}`)
})