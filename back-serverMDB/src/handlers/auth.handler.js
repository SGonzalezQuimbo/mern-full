const User = require('../models/user.model');
const bcrypt = require('bcryptjs'); //para encriptar el password
const createAccessToken = require('../libs/jwtAccessToken.js');
const jwt  = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config.js')


const registerHandler = async (req, res) => {
    const {email, password, username} = req.body;
    try {
        const userFound = await User.findOne({email})

        if (userFound) return res.status(400).json({message: "Este email ya esta en uso"})

        const passwordHash = await bcrypt.hash(password, 10) //genera una cadena de caracteres codificados, el numero es la cantidad de veces que se ejecuta el metodo para encriptar.

        const newUser = new User ({
        username,
        email,
        password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});
        res.cookie("token", token);
        res.status(200).json(userSaved);
    } catch (error) {
        res.status(400).json({error: error.response})
    }
    
};



const loginHandler = async (req, res) => {
    const {email, password} = req.body;
    try {

        const userFound = await User.findOne({email});
        
        if (!userFound) return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "Incorrect password"});

        const token = await createAccessToken({id: userFound._id});

        res.status(200).cookie("token", token).json({message: "Login succesfuly", user: userFound})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const logOutHandler = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    }).status(200).json({message: "User logOut"});

}

const profileHandler = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    
    if(!userFound) {
        return res.status(400).json({message: "User not found"});
    }

    return res.status(200).json(userFound);

}

const verifyToken = async (req, res) => {
    const {token} = req.cookies;

    if (!token) return res.status(400).json({message: "No token Autorization"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(400).json({message: 'No Autorization'});

        const userFound = await User.findById(user.id);
        if(!userFound) return res.status(400).json({message: 'No Autorization'});

        return res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    })
}

module.exports = {
    registerHandler,
    loginHandler,
    logOutHandler,
    profileHandler,
    verifyToken,
};