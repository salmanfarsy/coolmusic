const express = require('express');
const router  = express.Router();

//add
router.get('/songs/add', (req, res)=>{
    res.render('song/add');
})
module.exports = router;