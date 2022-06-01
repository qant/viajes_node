import express from 'express';

const router = express.Router();

//todo: separate pages to other file?
const pages = {
    home: {
        title:'Home1',
        description:'This is Home description1'
    },
    about: {
        title:'About',
        description:'This is Home description'
    }
};

//todo: may be generate routs?

router.get('/',(req,res)=>{    
    const page = pages.home;
    res.render('home', page);
    //res.json({success: true, id: 1234});    
});

router.get('/home',(req,res)=>{
    const page = {
        title:'Home',
        description:'This is Home description'
    };
    res.render('home',page);
});

router.get('/about',(req,res)=>{
    const page = {
        title:'About',
        description:'This is About description'
    };
    res.render('about',page);
});

router.get('/contact',(req,res)=>{
    const page = {
        title:'Contact',
        description:'This is Contact description'
    };
    res.render('contact', page);
});

export default router;