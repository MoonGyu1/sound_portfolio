const express = require('express');
const router = express.Router();

router.post('/signin', require('./userSigninPOST'));
router.get('/', require('./userGET'));

module.exports = router;
