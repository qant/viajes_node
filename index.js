//create express
//const express = require('express');
import express from 'express';
import router from './routes/index.js'

const app = express();

//add view engine
app.set('view engine', 'pug');

app.use(express.static('assets'));
/* also can be others like:
app.set('view engine', 'jade');
app.set('view engine' 'handlebars');
app.set('view engine' 'ejs');
app.set('view engine' 'html');
app.set('view engine' 'jsx');
*/

//set port or default port
const port = process.env.PORT || 4000;

app.use('/',router);

//create express listener pass port and callback function
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});