const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find().then(mov => {

    res.render('movie-list',{mov});

  }).catch((err) => {

      console.log(err);

    });  
});

router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(movieId)) { 
    return res.status(404).render('not-found');
  }

  Movie.findOne({'_id':movieId})
  .then(mov => {
    if(!mov){
      return res.status(404).render('not-found');
    }
    console.log(mov);
    res.render('singleMovie',mov);
  })
  .catch(next)
  // .catch((err)=>{
  //   console.log(err);
  // });
});

module.exports = router;
