//main file
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const volleyball = require('volleyball')

app.use(volleyball)

//console logs VERB and URI on server
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.url + ' ' + res.statusCode);
//   // console.log(req)
//   next();
// });

app.use('/special', (req, res, next) => {
  console.log("YOU'VE REACHED THE special AREA");
  // console.log(req)
  next();
});

//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse routerlication/json
app.use(bodyParser.json())

app.use(express.static('public'));

app.use('/', routes);





//NUNJUCKS

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});// point nunjucks to the proper directory for templates







app.listen(3000, function () {
  console.log('server listening');
});


