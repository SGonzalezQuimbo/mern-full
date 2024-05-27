const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, //este es el tipo de id que tiene el user
        ref: 'User', // este user hace referencia al modelo user, esto es para relacionar las tasks con un determinado user.
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema); //exporto el modelo Task basado en el taskSchema