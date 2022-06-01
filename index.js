//create express
const express = require('express');
const app = express();

//set port or default port
const port = process.env.PORT || 4000;

//create express listener pass port and callback function
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});