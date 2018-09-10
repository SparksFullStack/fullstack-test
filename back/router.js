const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Router is working!`);
})

module.exports = router;