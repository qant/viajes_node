import Sequelize from 'sequelize';
import db from '../db.js';

const Testimonials = db.define('testimonials', {
    /*id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },*/
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    message:{
        type: Sequelize.STRING
    }
});

export default Testimonials;