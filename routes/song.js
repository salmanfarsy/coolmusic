const express = require('express');
const router  = express.Router();
const Song  = require('../models/song');
const middleware = require('../middleware');
//index
router.get('/songs', (req, res)=>{
    Song.find({}, (err, songs)=>{
        if(err){
            console.log(err)
        } else{
            res.render('song/index', {songs : songs})
        }
    })
})
//add
router.get('/songs/add', middleware.check, (req, res)=>{
    res.render('song/add');
});
router.post('/songs', (req, res)=>{
const input = req.body.song;
function yt(){
    if(input.yt.length > 40){
      input.yt = input.yt.slice(32)
    } else if( input.yt.length<30){
      input.yt = input.yt.slice(17)
    }
  } ;
  yt();
  input.author={
      id:req.user._id,
      username:req.user.username
  }
Song.create(input, (err, done)=>{
    if(err){
        console.log(err)
    } else{
        res.redirect('/songs');
    }
})
});
//show page
router.get('/songs/:id', middleware.check, (req, res)=>{
    Song.findById(req.params.id).populate('comments').exec((err, song)=>{
        if(err){
            console.log(err)
        } else{
            res.render('song/show', {song : song})
        }
    })
});
//edit
router.get('/songs/:id/edit', middleware.songAuth, (req, res)=>{
    Song.findById(req.params.id, (err, song)=>{
        if(err){
            console.log(err)
        } else{
            res.render('song/edit', {song : song})
        }
    })
});
router.put('/songs/:id', middleware.songAuth, (req, res)=>{
    const input = req.body.song;
function yt(){
    if(input.yt.length > 40){
      input.yt = input.yt.slice(32)
    } else if( input.yt.length<30){
      input.yt = input.yt.slice(17)
    }
  } ;
  yt();
    Song.findByIdAndUpdate(req.params.id, input, (err, done)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/songs/' + req.params.id);
        }
    } )
});
//delete
router.get('/songs/:id/delete', middleware.songAuth, (req, res)=>{
    Song.findById(req.params.id, (err, song)=>{
        if(err){
            console.log(err)
        } else{
            res.render('song/delete', {song : song})
        }
    })
});
router.delete('/songs/:id', middleware.songAuth, (req, res)=>{
    Song.findByIdAndDelete(req.params.id, (err, done)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/songs');
        }
    })
});
//search
router.get('/search', (req, res)=>{
    const song = req.query.song;
    const str = eval(`/${song}/i`)
    Song.find({title:str}, (err, songs)=>{
        if(err){
            console.log(err)
        } else{
            res.render('song/index', {songs : songs})

        }
    })
})
module.exports = router;