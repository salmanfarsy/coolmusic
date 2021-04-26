//packages
const express = require('express'),
mongoose = require('mongoose'),
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
//routes
 app.get('/', (req, res)=>{
     res.render('home');
 })

//port
 app.listen(3000, ()=>{
     console.log('get on your website i am running it')
 })