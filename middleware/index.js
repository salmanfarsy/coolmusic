const User = require('../models/user');
const Song = require('../models/song');
const Comment = require('../models/comment');

const middleware ={
    check: (req, res, next)=>{
        if(req.isAuthenticated()){
            next();
        } else{
            res.redirect('back');
        }
    }
}

module.exports = middleware;