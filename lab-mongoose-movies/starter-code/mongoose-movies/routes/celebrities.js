const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) =>
{
  res.render('celebrities', {cel});
});