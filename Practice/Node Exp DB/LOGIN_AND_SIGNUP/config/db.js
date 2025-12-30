const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Database connected successfully", mongoose.connection.readyState)
    } catch (error) {
        console.log("Database connection failed", mongoose.connection.readyState)
        console.log(error)
    }
}
connectDB();

module.exports = connectDB;