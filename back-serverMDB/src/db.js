const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/firstcrud';




const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('DB is connected...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;