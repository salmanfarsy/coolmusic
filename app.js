//packages
const express = require('express'),
mongoose = require('mongoose'),
songRoute = require('./routes/song'),
methodOverride = require('method-override'),
 app   = express();
 //mongoose config
 mongoose.connect('mongodb://localhost/coolsongs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
//express config
 app.set('view engine', 'ejs');
 app.use(express.static('public'));
 app.use(express.urlencoded({extended:true}))
 app.use(methodOverride('_method'))
//routes
 app.get('/', (req, res)=>{
     res.render('home');
 });
 app.use(songRoute);

//port
 app.listen(3000, ()=>{
     console.log('get on your website i am running it')
 })