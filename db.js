import mysql from 'mysql';
/*root
  Password1.

  anton
  ToursPass1.*/
const dbName = 'tours'
const dbUser = 'anton';
const dbPassword = 'ToursPass1.';

const config = {
  host: 'localhost',
  user: 'anton',
  password: 'ToursPass1.',
  database: 'tours',
  multipleStatements: true //'Select 1...; Select 2...'
  //port: '3306',
  //debug: true    
};

const db = mysql.createConnection(config);

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('CONNECTED as id ' + db.threadId);
});

//console.log(db);
//db.end(); //to close connection

export default db;