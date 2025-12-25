const express = require('express');
const app = express();
// const url = require('url');

//ENV FILE
require('dotenv').config()

// middlewares
app.use(express.static('public/'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// for file handel multer
const multer =  require('multer')
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename:(req,file,callback)=>{
        callback(null,Date.now() + ' ' + file.originalname)
    }
})
const upload = multer({storage:storage})


//All Routes and controllers

// import Addmovie controller
const { Addmovie } = require('./controller/Addmovie')

// Addmovie Route 
app.get('/', Addmovie)

// import module database connection 
const connectDB = require('./config/connectDB')

// import movies schema
const movieSchema = require('./model/movieSchema');

// save movie controller
const { Savemovie } = require('./controller/Savemovie')
// data insert operation 
app.post('/savemovie', upload.single('posterUpload'), Savemovie)



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
app.post('/updatemovie/:id', upload.single('posterUpload'), Updatemovie)


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