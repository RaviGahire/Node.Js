const express = require('express');
const app = express();
require('dotenv').config();

// Load a Middlewares
app.use(express.static('public/'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// URL 
const url = require('url');
// const urldata = url.parse(req.body)
app.get('/', async (req, res) => {
    try {

        res.render('registration.ejs')

    } catch (error) {
        console.log(error)

    }

});


// Insert data in db 
const connectDB = require('./config/ConnectionDB')
const userSchema = require('./module/userSchema')
app.post('/submit_form', async (req, res) => {

    try {
        // res.send(req.body)
        const userdata = new userSchema(req.body)

        await userdata.save()

        console.log('User data added sucessfully ')

        res.send(`<script>
                   window.location.href = '/'
            </script>`)


    } catch (error) {
        console.log('Error Accoured while sending data in DB', error)
    }

})

// read the data
app.get('/user_info', async (req, res) => {
    try {
        const User_data = await userSchema.find()
        console.log('All user data found in DB')
        res.render('user_info.ejs', { data: User_data })


    } catch (error) {
        console.log(error)
    }
})

app.get('/users/delete/:id', async (req, res) => {
    try {
        await userSchema.findByIdAndDelete(req.params.id)
        console.log('user selected')
        res.send(`<script>
               alert('user deleted successfully ')
                   window.location.href = '/user_info'
            </script>`)

    } catch (error) {
        console.log(error)
    }
})


// Edit the data
app.get('/edit/:id', async (req, res) => {
    let id = req.params.id
    try {
        const datauser = await userSchema.findById(id)
        // console.log(userFind)
        // res.status(200).send(datauser)

        res.render('edit_info.ejs', { data: datauser })


    } catch (error) {
        console.log(error)
    }
})

// Update the data

app.post('/updatefrom/:id', async (req, res) => {
    var id = req.params.id

    try {
        const updatedData = await userSchema.findByIdAndUpdate(id,req.body)

        // res.send(updatedData)

        res.send(`<script>
            
            window.location.href = '/user_info'
            
            </script>`)
       

    } catch (error) {
        console.log(error)
    }



})





// fallback route 

app.use((req, res) => {
    res.render('error.ejs')
})


// Server 
const port = 3000
const host = '127.0.0.1'


app.listen(port, host, (res, req) => {

    console.log(`Server is runing on http://${host}:${port}`)
})
