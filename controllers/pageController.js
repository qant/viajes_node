import { Viajes } from '../models/Viajes.js'
import Testimonials from '../models/Testimonials.js'


const pageHome = async (req,res) =>{    

    const tours = await Viajes.findAll({limit:3});
    const testimonials = await Testimonials.findAll({
        limit:3,
        order: [['id','DESC']]        
    });

    const page = {
        title:'About US',
        description:'About US text About US text About US text About US text About US text About US text About US text About US text About US text About US text ',
        slider_header: 'Rio de Janeiro',
        slider_description: 'Adwenture',
        clase: 'home',
        tours,
        testimonials
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
    //console.log(tours);

    const page = {
        title:'Next Tours',
        description:'This is Tours description',
        tours
    };
    res.render('tours', page);
}

const pageTour = async (req,res)=>{
    
    try{
        const {slug} = req.params;

        const result = await Viajes.findOne(
            {
                where:{
                    //'slug': Tour
                    slug
                }
            }
        );

        console.log(result);
            console.info('FOUND!');
            //console.log(JSON.stringify(result));
            res.render('tour', {
                title: 'INFO',
                result
            });
        
    }catch(err){
        console.error('MYSQL ERROR!', err);
            const page = {
                title:'MYSQL ERROR!',
                description:'MYSQL ERROR '+ JSON.stringify(err) +' ON slug: "'+req.params.tour +'" NOT FOUND!'
            };
            res.render('404', page);
    }
    

    

}

const pageTestimonials = async (req,res)=>{
    try {
        const testimonials = await Testimonials.findAll({order: [
            ['id', 'DESC']
        ]});
        
        const page = {
            title:'Testimonials',
            description:'This is Testimonials description'        
        };

        res.render('testimonials', {page,testimonials});

    } catch (error) {
        console.log(error);
    }    
}

export {
    pageHome, 
    pageAbout, 
    pageContact,
    pageTours,
    pageTour,
    pageTestimonials
}