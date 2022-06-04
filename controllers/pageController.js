import { Viajes } from '../models/Viajes.js'

const pageHome = (req,res) =>{        
        const page = {
            title:'Home',
            description:'This is Home description'
        };
        res.render('home',page);
};

const pageAbout = (req,res) =>{
    const page = {
        title:'About',
        description:'This is About description'
    };
    res.render('about',page);
}

const pageContact = (req,res)=>{
    const page = {
        title:'Contact',
        description:'This is Contact description'
    };
    res.render('contact', page);
}

const pageTours = async (req,res)=>{
    
    const tours = await Viajes.findAll();
    console.log(tours);

    const page = {
        title:'Next Tours',
        description:'This is Tours description',
        tours
    };
    res.render('tours', page);
}
const pageTestimonials = (req,res)=>{
    const page = {
        title:'Testimonials',
        description:'This is Testimonials description'
    };
    res.render('tours', page);
}

export {
    pageHome, 
    pageAbout, 
    pageContact,
    pageTours,
    pageTestimonials
}