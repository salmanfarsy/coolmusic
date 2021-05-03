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
    },
    songAuth : (req, res, next)=>{
        Song.findById(req.params.id, (err, song)=>{
            if(err){
                console.log(err)
            } else{
                if(song.author.id.equals(req.user._id)){
                    next();
                }
            }
        })
    },
    commentAuth : (req, res, next)=>{
        Comment.findById(req.params.id, (err, comment)=>{
            if(err){
                console.log(err)
            } else{
                if(comment.author.id.equals(req.user._id)){
                    next();
                }
            }
        })
    }
}

module.exports = middleware;