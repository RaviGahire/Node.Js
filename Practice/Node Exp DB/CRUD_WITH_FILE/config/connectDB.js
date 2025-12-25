const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

const connectDB = async () => {
    try {
           await mongoose.connect(DATABASE_URL)
           console.log('Database connected successfully',mongoose.connection.readyState);


    } catch (error) {
      console.error('Database connection failed:', error.message);
      console.log(mongoose.connection.readyState)

    }
}

// calling connect db function 
connectDB()

// export 
module.exports = connectDB;
