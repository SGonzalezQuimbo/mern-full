const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config');


//se ejecuta antes de que llegue a la ruta

const authRequired = (req, res, next) => { //para que sea un middleware se necesita colocar next para indicarle que luego de ejecutada esta funcion se debe proseguir con la ruta si es el caso o con otra funcion.
    const {token} = req.cookies;

    if (!token) {
        return res.status(400).json({message: "No token, autorization denied"})
    };

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(400).json({message: "Invalid token"});
        }

        req.user = user; //aqui guardo el user para que en las demas rutas se pueda trabajar con el siempre y cuando sean rutas autorizadas/validadas para poder usar este user.
        
        next();
    })
    
}

module.exports = authRequired;