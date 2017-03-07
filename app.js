//main file
const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', (request, response) => {
  response.send('welcome');
});

app.listen(3000, function () {
  console.log('server listening');
});


