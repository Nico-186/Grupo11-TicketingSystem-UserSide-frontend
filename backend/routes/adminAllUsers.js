const express = require('express');
const router = express.Router();
const userData = require('../services/adminAllUsers');

router.get('/', async function(req, res, next) {
  try {
    res.json(await userData.getAllUsers(req.query.id));
  } catch (err) {
    console.error(`Error while getting all users `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await userData.create(req.body));
    res.sendStatus(200).end();
  } catch (err) {
    console.error(`Error while creatin user `, err.message);
    next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
    res.json(await userData.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error while updating user `, err.message);
    next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    res.json(await userData.remove(req.query.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;