const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/new', (req,res,next) =>
{
  res.render('movies/new');
});

router.post('/new', (req,res,next) =>{
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  if(newMovie.title && newMovie.genre && newMovie.plot !== ""){
    newMovie.save()
    .then((movie) =>{
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/movies/new');
    });
  }else{
    res.redirect('/movies/new');
  }
});

router.get('/', (req, res, next) =>{
  Movie.find().then(movie =>{
    res.render('movies/index', {movie});
  })
  .catch(next);
});

router.get('/:id',(req,res,next) => {
  let movId = req.params.id;
  if(!req.params.id){
    console.log(movId + ' <======= this is what it found : movId');
    return res.status(404).render('not-found');
  }
  Movie.findById(movId)
  .then(movie =>{
    if(!movie){
      console.log(movId + ' <======= this is what it found : movId');
      return res.status(404).render('not-found');
    }
    console.log(movie.title + ' <===== Movie');
    res.render('movies/show', {movie});
  })
  .catch(next);
});

module.exports = router;