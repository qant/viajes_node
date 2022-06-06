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


const pageTestimonials = (req,res)=>{
    const page = {
        title:'Testimonials',
        description:'This is Testimonials description'
    };
    res.render('testimonials', page);
}

export {
    pageHome, 
    pageAbout, 
    pageContact,
    pageTours,
    pageTour,
    pageTestimonials
}