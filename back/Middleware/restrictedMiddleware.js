const JWT = require('jsonwebtoken');

const secret = 'i like turtles';

const restricted = (req, res, next) => {
    const { userToken } = req.body;

    JWT.verify(userToken, secret) ?
        next() :
        res.status(404).send(`You're not authorized to view this content`);
}

module.exports = restricted;