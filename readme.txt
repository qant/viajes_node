to run this index.js app we need to add this line to package.json

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },

  and fater we can run this app from terminal like this:

  npm run dev

  -------------------------------

  new sintax index.js

  -------------

  Database mysql from here https://dev.mysql.com/downloads
  install workbench and mysql server (5.7 in my case)

  my local dev config in db.js

  root
  Password1.

  anton
  ToursPass1.

  create db connect using sequelize

  --------------

  MVC
  routers
  mysql query
  https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

  NOTE: try to use smaller fater alternative as: 
  https://github.com/mysqljs/mysql

  -------------

  Icons useful https://tablericons.com/
  get icon go to html to pug and put code to the .pug files

  -------

Useful tips on WINDOWS

Some times igon an error like this:
Error: listen EACCES: permission denied 0.0.0.0:4000

So the solution is: restart windows OR
as an admin:

net stop winnat
netsh int ipv4 set dynamic tcp start=49152 num=16384
netsh int ipv6 set dynamic tcp start=49152 num=16384
net start winnat


To check what ports are busy see what is use our 4000 port and close the program:

netstat -aon | find /i "listening"
taskkill /F /PID 2652
