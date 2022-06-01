//create express
//const express = require('express');
import express from 'express';
const app = express();

//set port or default port
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    console.log(`listening GET /`);        
    res.send('Text Bla bla');
    //res.json({success: true, id: 1234});
    
});

app.get('/home',(req,res)=>{
    res.send('Home');
});

app.get('/about',(req,res)=>{
    res.send('about');
});

app.get('/contact',(req,res)=>{
    res.send('contact');
});


//create express listener pass port and callback function
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});