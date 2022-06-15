import db from '../db.js';

const Testimonials = db.query('SELECT * FROM testimonials order by id DESC',
function(error, results, fields){
    if (error) throw error;
    //console.log('Testimonials ok!', results.length);
});

export default Testimonials;
