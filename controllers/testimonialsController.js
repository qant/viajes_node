const saveTestimonials = (req,res)=>{

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
    }else{
        const title = 'Testimonials';
        const description = 'Testimonials has beed added successfully!';
        res.render('testimonials', {title, description,errors, name, email, message});
    }
    
    
    //console.log(errors);

}

export default saveTestimonials;