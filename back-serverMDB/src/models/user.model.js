const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, //esto es por si en caso de que se ingrese un nombre con muchos espacios, esta propiedad los elimina y almacena unicamente la cadena de caracteres.
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);