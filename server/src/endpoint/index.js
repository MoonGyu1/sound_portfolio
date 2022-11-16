const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/portfolio', require('./portfolio'));

module.exports = router;
