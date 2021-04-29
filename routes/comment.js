const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const Comment = require('../models/comment');
//create comment
router.post('/songs/:id/comment', (req, res)=>{
Song.findById(req.params.id, (err, song)=>{
    if(err){
        console.log(err)
    } else{
        Comment.create({text:req.body.text}, (err, comment)=>{
          comment.save();  
          song.comments.push(comment);
          song.save();
          res.redirect('/songs/' + req.params.id);
        })
    }
})
});
//edit comment
router.get('/songs/:id/comment/:com/edit', (req, res)=>{
    Comment.findById(req.params.com, (err, comment)=>{
        if(err){
            console.log(err)
        } else{
            res.render('comment/edit', {comment:comment, id:req.params.id})
        }
    })
});
router.put('/songs/:id/comment/:com', (req, res)=>{
    Comment.findByIdAndUpdate(req.params.com, req.body.comment, (err, done)=>{
if(err){
    console.log(err)
} else{
    res.redirect('/songs/' + req.params.id)
}
    })
});
//delete
router.delete('/songs/:id/comment/:com', (req, res)=>{
    Comment.findOneAndDelete(req.params.com, (err, done)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/songs/' + req.params.id)
        }
    })
})

module.exports = router;