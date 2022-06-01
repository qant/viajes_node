//create express
//const express = require('express');
import express from 'express';
import router from './routes/index.js'

const app = express();

//set port or default port
const port = process.env.PORT || 4000;

app.use('/',router);

//create express listener pass port and callback function
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});