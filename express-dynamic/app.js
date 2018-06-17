var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// app.get('/', (req, res, next) => {
//   // send views/index.hbs for displaying in the browser
//   res.render('about');
// });

app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!",
    bootcamp: "<span>IronHack WebDev</span>"
  };
  res.render('home', data);
});

app.listen(3000);