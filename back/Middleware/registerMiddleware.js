const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const secret = 'i like turtles';

const register = (req, res, next) => {
    const credentials = req.body;
    if (!credentials.username || !credentials.password) return res.status(400).send(`Please provide a username and password`);

    const hashedPassword = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hashedPassword;

    const newJWT = JWT.sign(credentials, secret);
    req.jwt = newJWT;
    next();
}

module.exports = register;