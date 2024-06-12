const express = require('express');
const router = express.Router();
const userData = require('../services/adminGetAllUsers');

router.get('/', async function(req, res, next) {
  try {
    res.json(await userData.getAllUsers(req.query.id));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;