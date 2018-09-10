const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const UserModel = require('../UserModel');

const secret = 'i like turtles';

const login = (req, res, next) => {
    const credentials = req.body;
    if (!credentials.username || !credentials.password) return res.status(404).send(`Please provided a username and password`);

    UserModel.findOne({ username: credentials.username })
        .then(record => {
            if (record) {
                const validPass = bcrypt.compareSync(credentials.password, record.password);
                if (validPass){
                    const newJWT = JWT.sign(credentials, secret);
                    req.jwt = newJWT;
                    next();
                }
            } else {
                return res.status(404).send(`No user with that username was found, please try again`);
            }
        })
}

module.exports = login;