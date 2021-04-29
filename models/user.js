const mongoose = require('mongoose');
const user = require('../../your-games/models/user');
const monpass = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
});
userSchema.plugin(monpass);
module.exports = mongoose.model('User', userSchema);