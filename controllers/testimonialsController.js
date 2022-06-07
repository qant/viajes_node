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

    console.log(errors);
}

export default saveTestimonials;