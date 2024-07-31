const mongoose = require('mongoose');

//const URL = 'mongodb://127.0.0.1:27017/firstcrud';

const URI = 'mongodb+srv://sebasmdb4999:sebasmdb4999@cluster0.8q8dhfh.mongodb.net/myfirstcrudmern?retryWrites=true&w=majority&appName=Cluster0'




const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('DB is connected on URL...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;