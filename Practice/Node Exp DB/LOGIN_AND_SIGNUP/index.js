const express = require('express');
const app = express()
require('dotenv').config()
// middlewares
app.use(express.static('public/'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');



// multer 
const multer = require('multer')
const storage= multer.diskStorage({
    destination:'public/files', //folder_path
    filename:(file,req,callback)=>{

    }
})
const upload =multer({storage:storage})

//database connection
const connectDB =  require('./config/db')

app.get('/',(req,res)=>{

  res.render('home.ejs')

});


//user signup
app.get('/signup',(req,res)=>{
  res.render('signup.ejs')
});


//user login
app.get('/login',(req,res)=>{
  res.render('login.ejs')
});









const HOST = '127.0.0.1'
const PORT = 3000 || process.env.PORT

app.listen(PORT,HOST,()=>{
    console.log(`Srever is runing on http://${HOST}:${PORT}`)
});
