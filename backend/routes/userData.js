const express = require('express');
const router = express.Router();
const userData = require('../services/userData');

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await userData.getUserData(req.params.id));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;