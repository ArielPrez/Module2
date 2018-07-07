const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) =>
{
  Celebrity.find().then(cel => {
    res.render('celebrities/index', {cel});
  })
  .catch(next);
});

router.get('/:id',(req,res,next) => {
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

module.exports = router;