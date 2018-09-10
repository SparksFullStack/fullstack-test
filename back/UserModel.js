const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: String.isRequired,
    username: String.isRequired,
    password: String.isRequired
})

const UserModel = mongoose.model('/users', userSchema);

module.exports = UserModel;