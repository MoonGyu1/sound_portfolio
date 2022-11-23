const express = require('express');
const router = express.Router();

router.post('/signin', require('./userSigninPOST'));
router.get('/', require('./userGET'));
router.post('/id', require('./userIdPOST'));

module.exports = router;
