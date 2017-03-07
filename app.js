//main file
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use('/', routes);

//console logs VERB and URI on server
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.use(express.static('public'));



//NUNJUCKS

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});// point nunjucks to the proper directory for templates


app.listen(3000, function () {
  console.log('server listening');
});


