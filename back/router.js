const express = require('express');
const UserModel = require('./UserModel');
const JWT = require('jsonwebtoken');

const register = require('./Middleware/registerMiddleware');
const login = require('./Middleware/loginMiddleware');
const restricted = require('./Middleware/restrictedMiddleware');

const router = express.Router();

// test route
router.get('/', (req, res) => {
    res.send(`Router is working!`);
})

// register route
router.post('/register', register, (req, res) => {
    const credentials = req.body;
    const newUser = new UserModel(credentials);
    
    newUser.save()
        .then(() => {
            console.log(`The user was saved--JWT being sent`);
            res.status(201).send(req.jwt);
        })
})

// login router
router.post('/login', login, (req, res) => {
    const { name } = req.body;

    console.log(`${name} has logged in`);
    res.status(200).send(req.jwt);
})

// restricted router
router.get('/restricted/:jwt', (req, res) => {
    const { jwt } = req.params;
    JWT.verify(jwt, 'i like turtles') ?
        res.status(200).send(`Welcome. What're ya buyin'?`) :
        res.status(404).send(`You're too drunk to taste this chicken`);
})

module.exports = router;