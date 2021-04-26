const express = require('express'),
 app   = express();

 app.set('view engine', 'ejs');
 app.use(express.static('public'));

 app.get('/', (req, res)=>{
     res.send('your new project');
 })


 app.listen(3000, ()=>{
     console.log('get on your website i am running it')
 })