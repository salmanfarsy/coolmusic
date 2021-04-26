const express = require('express');
const router  = express.Router();
const Song  = require('../models/song');
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
router.get('/songs/add', (req, res)=>{
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
Song.create(input, (err, done)=>{
    if(err){
        console.log(err)
    } else{
        res.redirect('/songs');
    }
})
})
module.exports = router;