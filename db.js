import Sequelize from 'sequelize';
/*root
  Password1.

  anton
  ToursPass1.*/
const dbName = 'tours'
const dbUser = 'anton';
const dbPassword = 'ToursPass1.'

const db = new Sequelize(dbName, dbUser, dbPassword,{
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define:{
      timestamps: false,
    },
    pool: {
      max:5,
      min:0,
      acquuire: 30000,
      iddle: 1000
    },
    operatorAliases:false
});

export default db;