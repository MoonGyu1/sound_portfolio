const express = require('express');
const router = express.Router();

router.post('/signin', require('./userSigninPOST'));

module.exports = router;
