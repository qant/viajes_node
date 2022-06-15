import db from '../db.js';

const pageHome = async (req,res) =>{
    
    try {
        const tours = db.query('select * from viajes order by id desc limit 3; select * from testimonials order by id desc limit 3', function(error, results, fields){
            //const tours = db.query('select * from viajes order by id desc limit 3', function(error, results, fields){
            if (error) throw error;            
            
            const page = {
                title:'About US',
                description:'About US text About US text About US text About US text About US text About US text About US text About US text About US text About US text ',
                slider_header: 'Rio de Janeiro',
                slider_description: 'Adwenture',
                clase: 'home',
                tours: results[0],
                testimonials: results[1]
            };       
            
            res.render('home',page);


            /*results[0].forEach(function(tour){
                tours.titulo = tour.titulo;
                tours.precio = tour.precio;
            });*/
            /*for (let i = 0; i < results.length; i++) {
                tours.route = results[i].route;
                tours.routeName = results[i].route_name;
                console.log(routeObj);
            }*/
        });

/*        const testimonials = db.query('select * from testimonials order by id desc limit 3', function(error, results, fields){            
            if (error) throw error;
            //testimonials.results = results[0];
            return results[0];
        });*/
        
        const page = {
            title:'About US',
            description:'About US text About US text About US text About US text About US text About US text About US text About US text About US text About US text ',
            slider_header: 'Rio de Janeiro',
            slider_description: 'Adwenture',
            clase: 'home',
            tours: tours, 
            testimonials: testimonials
        };

        console.log(typeof tours);   
        console.log(typeof testimonials);
        console.log(tours, testimonials);

        res.render('home',page);
    } catch (error) {
        console.error(error);    
    }
    
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
