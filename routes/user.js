const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user');
const { checkUsername } = require('../middlewares/user');

const router = express.Router();

router.post('/', checkUsername, createUser);
router.get('/', getAllUsers);

module.exports = router;
