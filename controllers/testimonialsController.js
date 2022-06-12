import Testimonials from '../models/Testimonials.js'

const saveTestimonials = async (req,res)=>{

    console.log(req.body);
    const {name, email, message} = req.body;
    const errors = [];
    
    if (name.trim() === ''){
        errors.push('Name cant be empty');
    }
    if (email.trim() === ''){
        errors.push('Email cant be empty');
    }
    if (message.trim() === ''){
        errors.push('Message cant be empty');
    }
    if (errors.length > 0){
        const title = 'Testimonials';
        const description = 'Testimonials has an ERROR!';
        res.render('testimonials', {title, description,errors, name, email, message});
        console.log(errors);
    }else{

        const title = 'Testimonials';
        const description = 'Testimonials has beed added successfully!';

        try {
            await Testimonials.create({
                //id: null,
                name: name, 
                email: email, 
                message: message,
            })            
            res.redirect('testimonials');
        }catch(err){
            console.log('Mysql error! ', err);
            const error = 'Mysql error! '. err;
            res.render('testimonials', {title, description, error });
        }

    }
    //console.log(errors);
}

export default saveTestimonials;