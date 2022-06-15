import db from '../db.js';

export default Viajes = 
    db.query('select * from viajes order by id desc', 
    function(error, results,fields){
    if (error) throw error;    
    //todo: for each neccesary fields
    
    //console.log('viajes ok', results[0].length);
});