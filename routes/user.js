const express = require('express');
const router  = express.Router();
const passport = require('passport');
const User     = require('../models/user');
//new user
router.get('/register', (req, res)=>{
    res.render('user/register');
});

router.post('/register', (req, res)=>{
    User.register(new User({username : req.body.username}), req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            req.flash('error', err.message);
            res.redirect('back');
        } else{
            passport.authenticate('local')(req, res, ()=>{
                req.flash('done', 'Welcome New User');
                res.redirect('/songs')
            })
        }
    })
});
//Login
router.get('/login', (req, res)=>{
    res.render('user/login');
});
router.post('/login', passport.authenticate('local', {
    successRedirect:'/songs',
    successFlash:'done',
    successMessage:'Welcome Back',
    failureRedirect:'back',
    failureFlash:'User Dont exist or something went wrong'
}) ,(req, res)=>{});
//logout
router.get('/logout', (req, res)=>{
    req.logout();
    req.flash('done', 'Log-out Successful');
    res.redirect('back');
})
module.exports = router;