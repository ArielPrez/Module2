const express = require('express');
const router  = express.Router();
const movies = require('../bin/seeds.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movies.find().then(mov => {
    res.render('movie-list',{mov});
  }).catch((err) => {
      console.log(err);
    });  
});

module.exports = router;
