const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/FILE_UPLOAD')
        console.log('DB Connected Successfully.....!', mongoose.connection.readyState)


    } catch (error) {
        console.log('Something went wrong while connecting DB.....!', mongoose.connection.readyState)
        console.log(error);

    }

}
connectDB()

module.exports = connectDB;