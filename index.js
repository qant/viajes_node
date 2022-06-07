//create express
//const express = require('express');
import express from 'express';
import router from './routes/index.js'
import db from './db.js';

const app = express();

db.authenticate()
.then(()=>{
    console.log('connected!');
})
.catch(err=>{
    console.error('error!',err);
})

//add view engine
app.set('view engine', 'pug');
/* also can be others like:
app.set('view engine', 'jade');
app.set('view engine' 'handlebars');
app.set('view engine' 'ejs');
app.set('view engine' 'html');
app.set('view engine' 'jsx');
*/

//Add boy parser for form post data
app.use(express.urlencoded({extended: true}));

//static files
app.use(express.static('assets'));

//my function
app.use((req, res, next)=>{
    //year
    res.locals.jsYear = new Date().getFullYear();
    //console.log(res.locals); //good for debug
    next(); //or return next();
    //console.log(res);
});
//set port or default port
const port = process.env.PORT || 8000;

app.use('/',router);

//create express listener pass port and callback function
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});