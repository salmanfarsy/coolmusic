const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const Comment = require('../models/comment');
//create comment
router.post('/songs/:id/comment', (req, res)=>{
Song.findById(req.params.id, (err, song)=>{
    if(err){
        console.log(err);
        req.flash('error', 'something went wrong');
        res.redirect('back');
    } else{
        Comment.create({text:req.body.text}, (err, comment)=>{
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
          comment.save();  
          song.comments.push(comment);
          song.save();
          req.flash('done', 'Comment added');
          res.redirect('/songs/' + req.params.id);
        })
    }
})
});
//edit comment
router.get('/songs/:id/comment/:com/edit', (req, res)=>{
    Comment.findById(req.params.com, (err, comment)=>{
        if(err){
            console.log(err);
            req.flash('error', 'something went wrong');
            res.redirect('back');
        } else{
           
            res.render('comment/edit', {comment:comment, id:req.params.id})
        }
    })
});
router.put('/songs/:id/comment/:com', (req, res)=>{
    Comment.findByIdAndUpdate(req.params.com, req.body.comment, (err, done)=>{
if(err){
    console.log(err);
    req.flash('error', 'something went wrong');
    res.redirect('back');
} else{
    req.flash('done', 'Comment Edited');
    res.redirect('/songs/' + req.params.id)
}
    })
});
//delete
router.delete('/songs/:id/comment/:com', (req, res)=>{
    Comment.findByIdAndDelete(req.params.com, (err, done)=>{
        if(err){
            req.flash('error', 'something went wrong');
            res.redirect('back');
            console.log(err)
        } else{
            req.flash('done', 'Comment Deleted');
            res.redirect('/songs/' + req.params.id)
        }
    })
})

module.exports = router;