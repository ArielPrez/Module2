const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/new', (req, res, next) =>
{
  res.render('celebrities/new');
});

router.post('/new', (req,res,next) => {
  const { name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name,occupation,catchPhrase});
  console.log(newCelebrity.name + ' <==== the newCelebrity');
  if(newCelebrity.name && newCelebrity.occupation && newCelebrity.catchPhrase !== ""){
    newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/celebrities/new');
    });
  }else{
    res.redirect('/celebrities/new');
  }
  
});

router.get('/', (req, res, next) =>
{
  Celebrity.find().then(cel => {
    res.render('celebrities/index', {cel});
  })
  .catch(next);
});

router.get('/:id',(req,res,next) => {// <===== here the route already starts in /celebrities
  let celId = req.params.id;
  if(!req.params.id){
    console.log(celId + ' <====== this is what it found : celId');
    return res.status(404).render('not-found');
  }
  Celebrity.findById(celId)
  .then(celeb => {
    if(!celeb){
      console.log(celId + ' <====== this is what it found : celeb');
      return res.status(404).render('not-found');
    }
    console.log(celeb.name + ' <====== Celebrity');
    res.render('celebrities/show', {celeb});
  })
  .catch(next);
});



router.post('/:id/delete', (req,res,next) => {
  let celId = req.params.id;
  Celebrity.findByIdAndRemove(celId)
  .then((celeb) => {
    if(!celeb) return res.status(404).render('not-found');
    console.log('===> Successful Deletion. <===');
    res.redirect('/celebrities');
  })
  .catch(next);
});



module.exports = router;