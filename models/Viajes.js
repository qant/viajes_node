import Sequelize from 'sequelize';
import db from '../db.js';

export const Viajes = db.define('viajes', {
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequalize.STRING
    }
});