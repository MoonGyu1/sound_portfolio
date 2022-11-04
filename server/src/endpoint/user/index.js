const express = require('express');
const router = express.Router();
console.log('hi');
router.post('/test', require('./userTestPOST'));

module.exports = router;
