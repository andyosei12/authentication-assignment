const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user');
const {
  checkUsername,
  checkIsAdmin,
  checkAuth,
} = require('../middlewares/user');

const router = express.Router();

router.post('/', checkUsername, createUser);
router.get('/', checkAuth, checkIsAdmin, getAllUsers);

module.exports = router;
