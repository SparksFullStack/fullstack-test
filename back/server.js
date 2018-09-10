// importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

// setting up the server
const port = process.env.PORT || 3001;
const server = express();

// adding middleware
mongoose.Promise = global.Promise;

// setting up the database
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log(`Mongoose is connected`))
    .on('error', (err) => console.warn(err));

// adding routers to the server
server.get('/', (req, res) => {
    res.send(`Server is running!`);
})

server.use('/auth', router);

// initializing the server
server.listen(port, () => console.log(`The server is listening on port ${port}`));