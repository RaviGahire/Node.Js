
const mongooes = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL;


async function  connectDB() {
    try {
        await mongooes.connect(DATABASE_URL)
        console.log('Database connected sucessfully');

    } catch (error) {
        console.log('Database connection faild ', error.message)
    }

}

 connectDB()

module.exports = connectDB