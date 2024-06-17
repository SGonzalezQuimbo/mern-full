const {Router} = require('express');
const {registerHandler, loginHandler, logOutHandler, profileHandler, verifyToken} = require('../handlers/auth.handler');
const authRequired = require('../middlewares/validateUserToken');

const usersRouter = Router();

usersRouter.post("/register", registerHandler);

usersRouter.post("/login", loginHandler);

usersRouter.post("/logout", logOutHandler);

usersRouter.post("/verifytoken", verifyToken);

usersRouter.get("/profile", authRequired, profileHandler);

module.exports = usersRouter;