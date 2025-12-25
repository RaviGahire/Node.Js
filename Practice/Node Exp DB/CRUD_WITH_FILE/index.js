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

// save movie controller
const { Savemovie } = require('./controller/Savemovie')
// data insert operation 
app.post('/savemovie', Savemovie)



// controller 
const { Movies } = require('./controller/Movies')
// Read data 

app.get('/moviedata', Movies)


//controller 
const { Editmoviedata } = require('./controller/Editmoviedata')
//edit movie data 
app.get('/edit/:id', Editmoviedata)


// controller
const { Updatemovie } = require('./controller/Update')
//update in database edited moviedata
app.post('/editmovie/:id', Updatemovie)


// controller 
const {Deletemovie} =  require('./controller/Deletemovie')
// delete movie
app.get('/delete/:id',Deletemovie )


// Fallback

const port = 3000
const host = '127.0.0.1'

app.listen(port, host, () => {
    console.log(`Server runing on http://${host}:${port}`)
})