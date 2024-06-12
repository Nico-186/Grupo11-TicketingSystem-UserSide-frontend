const express = require('express');
const router = express.Router();
const userData = require('../services/login');

router.get('/', async function(req, res, next) {
  try {
    res.json(await userData.getLoginUsrData(req.query.username,req.query.password));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;