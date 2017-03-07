//main file
const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.get('/', (request, response) => {
  response.send('welcome');
});

app.get('/news', (request, response) => {
  response.send('THE NEWS');
});






app.listen(3000, function () {
  console.log('server listening');
});


