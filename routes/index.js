import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    console.log(`listening GET /`);        
    res.send('Text Bla bla');
    //res.json({success: true, id: 1234});    
});

router.get('/home',(req,res)=>{
    res.render('home');
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

export default router;