//packages
const express = require('express'),
mongoose = require('mongoose'),
songRoute = require('./routes/song'),
commentRoute =require('./routes/comment'),
userRoute    = require('./routes/user'),
methodOverride = require('method-override'),
passport      = require('passport'),
localpass    = require('passport-local'),
Song        = require('./models/song'),
Comment   = require('./models/comment'),
User        = require('./models/user'),
session    = require('cookie-session'),
flash     = require('connect-flash'),
 app   = express();
 //mongoose config
//  mongoose.connect('mongodb://localhost/coolsongs', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
//online mongo cloud
mongoose.connect('mongodb+srv://salman:yyM5vn0uXut6ModU@cluster0.bzg4h.mongodb.net/songs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
//express config
 app.set('view engine', 'ejs');
 app.use(express.static('public'));
 app.use(express.urlencoded({extended:true}))
 app.use(methodOverride('_method'));
 app.use(flash());
 //passport config
 app.use(session({
     secret:'kpop',
     resave:false,
     saveUninitialized:false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 passport.use(new localpass(User.authenticate()));
 //global variables
 app.use((req, res, next)=>{
     res.locals.done = req.flash('done');
     res.locals.error = req.flash('error');
    res.locals.user = req.user; 
    next();
 })
//routes
 app.get('/', (req, res)=>{
     res.render('home');
 });
 app.use(userRoute);
 app.use(songRoute);
 app.use(commentRoute);

//port
 app.listen(3000 || process.env.PORT, ()=>{
     console.log('get on your website i am running it')
 })