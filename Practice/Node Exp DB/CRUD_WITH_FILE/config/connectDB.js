const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

const connectDB = async () => {
    try {
        const database = await mongoose.connect(DATABASE_URL)
           console.log('Database connected successfully');


    } catch (error) {
      console.error('Database connection failed:', error.message);

    }
}

// calling connect db function 
connectDB()

// export 
module.exports = connectDB;
